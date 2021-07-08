import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { LayoutMenu } from "../lib/layout.menu";
import { Loading } from "../lib/loading";
import { Pagination } from "../lib/pagination";
import { UserGridCard } from "../lib/user.GgridCard";
import { UserListCard } from "../lib/user.listCard";
import { UsersFilter } from "../lib/usersFilter";
import { IUser, IUsersResponse } from "../models/user";
import { actionCreators } from "../redux";
import { getApiService } from "../service";

export function Users() {
  const [usersData, setUsersData] = useState<IUsersResponse>();
  const [loading, setLoading] = useState(true);
  const [per_page, setPer_page] = useState(7);
  const [page, setPage] = useState(1);

  const { currentLayout } = useSelector((state: any) => state.layout);
  const dispatch = useDispatch();
  const { setLayout } = bindActionCreators(actionCreators, dispatch);

  const handleLayout = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLayout(value);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPer_page(Number(e.target.value));
    setPage(1);
    fetchData(Number(e.target.value));
  };

  const paginate = (page: number) => {
    setPage(page);
  };
  const nextPage = () => {
    if (usersData && page + 1 <= usersData.total_pages) {
      setPage(page + 1);
      fetchData(per_page, page + 1);
    }
  };
  const previousPage = () => {
    if (page - 1 > 0) {
      setPage(page - 1);
      fetchData(per_page, page - 1);
    }
  };

  const fetchData = async (per_page?: number, page?: number) => {
    try {
      setLoading(true);
      const result = await getApiService().getUsersData(per_page, page);
      setUsersData((state: any) => ({ ...state, ...result }));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(per_page, page);
  }, [page]);

  const gridClasses =
    currentLayout === "normal"
      ? "row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 px-0 py-5"
      : "row row-cols-1 g-4 px-0 py-5";

  const grid = (user: IUser) =>
    currentLayout === "normal" ? (
      <UserGridCard user={user} />
    ) : (
      <UserListCard user={user} />
    );

  return loading ? (
    <Loading />
  ) : !usersData ? (
    <h1>No Users</h1>
  ) : (
    <div className="container pt-5">
      <div className="row d-flex justify-content-between">
        <div className="col-2 col-lg-1">
          <LayoutMenu handleLayout={handleLayout} layout={currentLayout} />
        </div>
        <div className="col-3" style={{ direction: "ltr", width: "7rem" }}>
          <UsersFilter handleFilter={handleFilter} />
        </div>
      </div>
      <div className={gridClasses}>
        {usersData.data.map((user) => {
          return (
            <div className="col" key={user.id}>
              {grid(user)}
            </div>
          );
        })}
      </div>
      <div className="row mb-5">
        <div className="col d-flex justify-content-center">
          <Pagination
            perPage={per_page}
            total={usersData.total}
            paginate={paginate}
            nextPage={nextPage}
            previousPage={previousPage}
            activePage={page}
          />
        </div>
      </div>
    </div>
  );
}

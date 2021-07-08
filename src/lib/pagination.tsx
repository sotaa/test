interface PaginationProps {
  perPage: number;
  total: number;
  paginate: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  activePage: number;
}

export function Pagination({
  perPage,
  total,
  nextPage,
  previousPage,
  paginate,
  activePage,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / Number(perPage)); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      className="pagination shadow rounded px-3"
      style={{ cursor: "pointer" }}
    >
      <span
        className="pt-2"
        onClick={previousPage}
        style={{ marginLeft: "20px" }}
      >
        <i className="fas fa-angle-double-right"></i>
      </span>
      {pageNumbers.map((number) => {
        return (
          <span
            key={number}
            className={`page-link pt-2 border-0 fw-bold ${
              activePage === number ? "text-primary" : "text-secondary"
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </span>
        );
      })}

      <span className="pt-2" onClick={nextPage} style={{ marginRight: "20px" }}>
        <i className="fas fa-angle-double-left"></i>
      </span>
    </nav>
  );
}

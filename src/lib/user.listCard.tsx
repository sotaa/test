import { IUser } from "../models/user";

interface UserHorizontalCardProps {
  user: IUser;
}

export function UserListCard({ user }: UserHorizontalCardProps) {
  return (
    <div
      className="card p-3 mb-3"
      style={{
        maxWidth: "540px",
        borderRadius: "15px",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={user.avatar}
            className="img-fluid rounded-circle w-75"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {user.first_name} {user.last_name}
            </h5>
            <p className="card-text">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

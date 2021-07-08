import { IUser } from "../models/user";

interface UserCardProps {
  user: IUser;
}

export function UserGridCard({ user }: UserCardProps) {
  return (
    <div
      className="card p-3"
      style={{
        borderRadius: "15px",
      }}
    >
      <img
        src={user.avatar}
        className="card-img-top rounded-circle mx-auto w-50"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {user.first_name} {user.last_name}
        </h5>
        <p className="card-text">{user.email}</p>
      </div>
    </div>
  );
}

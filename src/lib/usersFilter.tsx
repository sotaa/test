interface UsersFilterProps {
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function UsersFilter({ handleFilter }: UsersFilterProps) {
  return (
    <select
      className="form-select form-select-sm"
      style={{ cursor: "pointer" }}
      aria-label=".form-select-sm example"
      onChange={handleFilter}
    >
      <option value="0">Users</option>
      <option value="4">Four</option>
      <option value="7">Seven</option>
      <option value="12">Twelve</option>
    </select>
  );
}

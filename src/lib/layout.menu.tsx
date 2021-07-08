interface LayoutMenuProps {
  layout: "normal" | "horizontal";
  handleLayout: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function LayoutMenu({ handleLayout, layout }: LayoutMenuProps) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="normal"
          id="flexRadioDefault1"
          onChange={handleLayout}
          checked={layout === "normal" ? true : false}
          style={{ cursor: "pointer" }}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="flexRadioDefault1"
          style={{ cursor: "pointer" }}
        >
          Grid
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          value="horizontal"
          id="flexRadioDefault2"
          checked={layout === "horizontal" ? true : false}
          onChange={handleLayout}
          style={{ cursor: "pointer" }}
        />
        <label
          className="form-check-label fw-bold"
          htmlFor="flexRadioDefault2"
          style={{ cursor: "pointer" }}
        >
          List
        </label>
      </div>
    </>
  );
}

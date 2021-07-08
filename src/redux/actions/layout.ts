export const setLayout = (layout: any) => {
  return (dispatch: any) => {
    dispatch({ type: "SET_LAYOUT", payload: layout });
  };
};

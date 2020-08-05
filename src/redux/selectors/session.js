export const selectVisible = (state, element) => state.session.get(`${element}Visible`);
export default selectVisible;
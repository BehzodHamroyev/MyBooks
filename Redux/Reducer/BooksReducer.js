import { SET_BOOKS } from '../Type';

const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};
export default reducer;

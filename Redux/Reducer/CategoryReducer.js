
import {  SET_CATEGORY } from '../Type';

const initialState = {
  data: [],
};
 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};
export default reducer;

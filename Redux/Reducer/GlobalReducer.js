import { TOGGLE_SEARCH, TOGGLE_SIDEBAR, TOGGLE_THEME } from '../Type';

const initial = {
  sidebar: true,
  search: true,
  theme: true,
};
const reuducer = (state = initial, action) => {
  console.log(action);
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebar: !state.sidebar };
    case TOGGLE_SEARCH:
      return { ...state, search: !state.search };
    case TOGGLE_THEME:
      return { ...state, theme: !state.theme };
    default:
      return { ...state };
  }
};
export default reuducer;

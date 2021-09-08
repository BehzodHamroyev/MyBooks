import { TOGGLE_SEARCH, TOGGLE_SIDEBAR, TOGGLE_THEME } from '../Type';

import { dispatch } from '../Store';
export const sidebarToggle = () => {
  const action = { type: TOGGLE_SIDEBAR };
  dispatch(action);
};
export const searchToggle = () => {
  const action = { type: TOGGLE_SEARCH };
  dispatch(action);
};
export const themeToggle = () => {
  const action = { type: TOGGLE_THEME };
  dispatch(action);
};

import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);

  // When you are in the last page -> no users left
  if (users.length === 0) return;

  // Update state
  state.currentPage += 1;
  state.users = users;
};

const loadPreviousPage = async() => {
  // If it's the first page
  if(state.currentPage === 0) return;

  const users = await loadUsersByPage(state.currentPage - 1);

  // Update state
  state.currentPage -= 1;
  state.users = users;
};

const onUserChanged = () => {
  throw new Error("Not implemented");
};

const reloadPage = () => {
  throw new Error("Not implemented");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   *
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   *
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage,
};

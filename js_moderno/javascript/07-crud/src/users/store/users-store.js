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

const loadPreviousPage = async () => {
  // If it's the first page
  if (state.currentPage === 1) return;

  const users = await loadUsersByPage(state.currentPage - 1);

  // Update state
  state.currentPage -= 1;
  state.users = users;
};

/**
 *
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === updatedUser.id) {
      wasFound = true;
      return updatedUser;
    }
    return user;
  });

  // If we have less than 10 users
  if (state.length < 10 && !wasFound) {
    state.users.push(updatedUser);
  }
};

const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);

  // When you are in the last page -> no users left
  if (users.length === 0) {
    await loadPreviousPage();
    return;
  }

  // Update users at state
  state.users = users;
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

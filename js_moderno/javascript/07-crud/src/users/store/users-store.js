const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = () => {
  throw new Error('Not implemented')
}

const loadPreviousPage = () => {
  throw new Error('Not implemented')
}

const onUserChanged = () => {
  throw new Error('Not implemented')
}

const reloadPage = () => {
  throw new Error('Not implemented')
}

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,
  getUsers: () => [...state.users],
  getCurrentPage: () => state.currentPage
}
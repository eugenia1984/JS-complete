import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

const createTable = () => {
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead');
  tableHeaders.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>Balance</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `

  const tableBody = document.createElement('tbody');
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderTable = (element) => {
  const users = usersStore.getUsers();

  if(!table) {
    table = createTable();
  }
};

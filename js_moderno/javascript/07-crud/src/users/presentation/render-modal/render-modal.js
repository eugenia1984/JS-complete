import modalHtml from "./render-modal.html?raw";
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
import "./render-modal.css";

let modal, form;
let loadedUser = {};

// TODO: Load user by id
/**
 *
 * @param {String|Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  loadedUser = {};

  if (!id) return;

  const user = await getUserById(id);
  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");

  form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;
  loadedUser = user;
};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike) => Promise<void> } callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;

  // If there is no modal -> create
  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  // modal.classList.add();
  modal.className = "modal-container hide-modal";

  // Form HTML reference
  form = modal.querySelector("form");

  // EventListener at form submit
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const userLike = {...loadedUser};

    for (const [key, value] of formData) {
      if (key === "balance") {
        // Concat string to number
        userLike[key] = +value;
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }

      userLike[key] = value;
    }
    await callback(userLike);

    hideModal();
  });

  // EventListener to closed modal if it's clicked
  modal.addEventListener("click", (event) => {
    if (event.target.className !== "modal-container") return;

    hideModal();
  });

  element.append(modal);
};

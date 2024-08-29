import modalHtml from "./render-modal.html?raw";
import "./render-modal.css";

let modal, form;

// TODO: Load user by id
export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");

  form?.reset();
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
    const userLike = {};

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

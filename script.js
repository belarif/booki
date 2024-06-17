"use_strict";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelector("#close-modal");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

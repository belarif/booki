"use strict";

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector("#close-modal");

document.addEventListener("DOMContentLoaded", () => {
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

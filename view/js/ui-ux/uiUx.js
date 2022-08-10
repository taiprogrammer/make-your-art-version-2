function openModal(n) {
  let modal = document.getElementById("modal");

  let modalImage = document.getElementById("modalImage");

  modal.style.display = "block";

  modalImage.src = `../assets/img/ui-ux/ui-art-${n}.webp`;
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

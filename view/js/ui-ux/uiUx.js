let isEmpty = false;

function openModal(n) {
  let modal = document.getElementById("modal");

  let modalImage = document.getElementById("modalImage");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  modal.style.display = "block";

  modalImage.src = `../assets/img/ui-ux/ui-art-${n}.webp`;
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

function like() {
  const iconLike = document.getElementById("like");

  if (!isEmpty) {
    isEmpty = true;
    iconLike.src = "../assets/icons/ic-heart-filled.svg";
  } else if (isEmpty) {
    isEmpty = false;
    iconLike.src = "../assets/icons/ic-heart-empty.svg";
  }
}

function openModal(n) {
  let modal = document.getElementById("modal");
  let modalContentOne = document.getElementById("content_one");
  let modalContentTwo = document.getElementById("content_two");
  let modalContentThree = document.getElementById("content_three");
  let modalContentFour = document.getElementById("content_four");
  let modalContentFive = document.getElementById("content_five");
  let modalContentSix = document.getElementById("content_six");
  let modalContentSeven = document.getElementById("content_seven");
  let modalContentEight = document.getElementById("content_eight");
  let modalContentNine = document.getElementById("content_nine");
  let modalContentTen = document.getElementById("content_ten");
  let modalContentEleven = document.getElementById("content_eleven");
  let modalContentTwelve = document.getElementById("content-twelve");
  let modalContentThirteen = document.getElementById("content-thirteen");

  modal.style.display = "block";

  if (n === 1) {
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentOne.style.display = "block";
  }
  if (n === 2) {
    modalContentOne.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentTwo.style.display = "block";
  }
  if (n === 3) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentThree.style.display = "block";
  }
  if (n === 4) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentFour.style.display = "block";
  }
  if (n === 5) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentFive.style.display = "block";
  }
  if (n === 6) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentSix.style.display = "block";
  }
  if (n === 7) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentEight.style.display = "none";
    modalContentSeven.style.display = "block";
  }
  if (n === 8) {
    modalContentOne.style.display = "none";
    modalContentTwo.style.display = "none";
    modalContentThree.style.display = "none";
    modalContentFour.style.display = "none";
    modalContentFive.style.display = "none";
    modalContentSix.style.display = "none";
    modalContentSeven.style.display = "none";
    modalContentEight.style.display = "block";
  }
}

function closeModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

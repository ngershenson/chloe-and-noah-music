let selectedThumbnailId = "t-1";
let selectedVideoId = "m-1";

const addLinkHoverListeners = () => {
  const aboutUsLink = document.querySelector("#about-us-link");
  const mediaContentLink = document.querySelector("#media-content-link");
  const contactLink = document.querySelector("#contact-link");

  aboutUsLink.addEventListener("mouseenter", highlightLink);
  mediaContentLink.addEventListener("mouseenter", highlightLink);
  contactLink.addEventListener("mouseenter", highlightLink);

  aboutUsLink.addEventListener("mouseleave", unHighlightLink);
  mediaContentLink.addEventListener("mouseleave", unHighlightLink);
  contactLink.addEventListener("mouseleave", unHighlightLink);
};

const highlightLink = (e) => {
  e.target.classList.add("selected");
};

const unHighlightLink = (e) => {
  e.target.classList.remove("selected");
};

const addChevronListeners = () => {
  const leftChevron = document.querySelector(".fa-chevron-left");
  const rightChevron = document.querySelector(".fa-chevron-right");

  leftChevron.addEventListener("click", selectLeft);
  rightChevron.addEventListener("click", selectRight);
};

const selectLeft = () => {
  decrementSelection(selectedVideoId);
};

const selectRight = () => {
  incrementSelection(selectedVideoId);
};

const decrementSelection = (id) => {
  switch (id) {
    case "m-1":
      document.querySelector("#m-1").classList.remove("selected");
      document.querySelector("#m-3").classList.add("selected");
      document.querySelector("#t-1").classList.remove("selected");
      document.querySelector("#t-3").classList.add("selected");
      selectedVideoId = "m-3";
      selectedThumbnailId = "t-3";
      break;
    case "m-2":
      document.querySelector("#m-2").classList.remove("selected");
      document.querySelector("#m-1").classList.add("selected");
      document.querySelector("#t-2").classList.remove("selected");
      document.querySelector("#t-1").classList.add("selected");
      selectedVideoId = "m-1";
      selectedThumbnailId = "t-1";
      break;
    case "m-3":
      document.querySelector("#m-3").classList.remove("selected");
      document.querySelector("#m-2").classList.add("selected");
      document.querySelector("#t-3").classList.remove("selected");
      document.querySelector("#t-2").classList.add("selected");
      selectedVideoId = "m-2";
      selectedThumbnailId = "t-2";
      break;
  }
};

const incrementSelection = (id) => {
  switch (id) {
    case "m-1":
      document.querySelector("#m-1").classList.remove("selected");
      document.querySelector("#m-2").classList.add("selected");
      document.querySelector("#t-1").classList.remove("selected");
      document.querySelector("#t-2").classList.add("selected");
      selectedVideoId = "m-2";
      selectedThumbnailId = "t-2";
      break;
    case "m-2":
      document.querySelector("#m-2").classList.remove("selected");
      document.querySelector("#m-3").classList.add("selected");
      document.querySelector("#t-2").classList.remove("selected");
      document.querySelector("#t-3").classList.add("selected");
      selectedVideoId = "m-3";
      selectedThumbnailId = "t-3";
      break;
    case "m-3":
      document.querySelector("#m-3").classList.remove("selected");
      document.querySelector("#m-1").classList.add("selected");
      document.querySelector("#t-3").classList.remove("selected");
      document.querySelector("#t-1").classList.add("selected");
      selectedVideoId = "m-1";
      selectedThumbnailId = "t-1";
      break;
  }
};

const addListeners = () => {
  addLinkHoverListeners();
  addChevronListeners();
};

document.addEventListener("DOMContentLoaded", () => {
  addListeners();
});

const highlightLink = (e) => {
  e.target.classList.add("selected");
};

const unHighlightLink = (e) => {
  e.target.classList.remove("selected");
};

const addLinkHoverListeners = () => {
  const aboutUsLink = document.querySelector("#about-us-link");
  const mediaContentLink = document.querySelector("#media-content-link");
  const contactLink = document.querySelector("#contact-link");

  const leftChevron = document.querySelector(".fa-chevron-left");
  const rightChevron = document.querySelector(".fa-chevron-right");

  aboutUsLink.addEventListener("mouseenter", highlightLink);
  mediaContentLink.addEventListener("mouseenter", highlightLink);
  contactLink.addEventListener("mouseenter", highlightLink);
  leftChevron.addEventListener("mouseenter", highlightLink);
  rightChevron.addEventListener("mouseenter", highlightLink);

  aboutUsLink.addEventListener("mouseleave", unHighlightLink);
  mediaContentLink.addEventListener("mouseleave", unHighlightLink);
  contactLink.addEventListener("mouseleave", unHighlightLink);
  leftChevron.addEventListener("mouseenter", unHighlightLink);
  rightChevron.addEventListener("mouseenter", unHighlightLink);
};

const addListeners = () => {
  addLinkHoverListeners();
};

document.addEventListener("DOMContentLoaded", () => {
  addListeners();
});

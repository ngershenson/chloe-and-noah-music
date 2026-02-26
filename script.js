const highlightLink = (e) => {
  console.log(e);
  e.target.classList.add("selected");
};

const unHighlightLink = (e) => {
  console.log(e);
  e.target.classList.remove("selected");
};

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

const addListeners = () => {
  addLinkHoverListeners();
};

document.addEventListener("DOMContentLoaded", () => {
  addListeners();
});

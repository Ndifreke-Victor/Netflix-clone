const prevButton = document.querySelector(".scroll-button.prev");
const nextButton = document.querySelector(".scroll-button.next");
const imgsContainer = document.querySelector(".imgs");

const scrollAmount = 300;

prevButton.addEventListener("click", () => {
  imgsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
  imgsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

document.querySelectorAll(".aLabel").forEach((label) => {
  label.addEventListener("click", () => {
    // Toggle the active class on the clicked accordionContent
    const accordionContent = label.parentElement;
    accordionContent.classList.toggle("active");

    // Close other accordion items if they are open
    document.querySelectorAll(".accordionContent").forEach((content) => {
      if (content !== accordionContent) {
        content.classList.remove("active");
      }
    });
  });
});

const images = document.querySelectorAll(".absolute-image");

images.forEach((image) => {
  image.addEventListener("mousemove", (event) => {
    image.style.animation = "none";
    const rect = image.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (centerX - mouseX) * 0.2;
    const offsetY = (centerY - mouseY) * 0.2;

    image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  const randomFloat = Math.floor(Math.random() * 3) + 1;

  image.addEventListener("mouseleave", () => {
    image.style.animation = `float-${randomFloat} 5s linear infinite`;
  });
});

const counters = document.querySelectorAll(".number-counter h4");

const startCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const speed = 200; // Adjust this value for faster/slower count

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target; // Ensure it ends on the target number
    }
  };

  updateCount();
};

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        startCounter(counter);
        observer.unobserve(counter); // Stop observing once counted
      }
    });
  },
  { threshold: 0.5 }
); // Trigger when 50% of the element is visible

counters.forEach((counter) => {
  observer.observe(counter);
});

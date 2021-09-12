window.addEventListener("load", function () {
  const body = document.querySelector("body");

  new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true,
    fadingEffect: true,
    navigation: true,
    navigationPosition: "right",
    onLeave: function (origin, destination, direction) {
      if (destination.index == 0) {
        body.style.background = "#FF8CA5";
      }
      if (destination.index == 1) {
        body.style.background = "#fdff82";
      }
      if (destination.index == 2) {
        body.style.background = "#860070";
      }
      if (destination.index == 3) {
        body.style.background = "#b8ffc2";
      }
      if (destination.index == 4) {
        body.style.background = "#F75C03";
      }
      if (destination.index == 5) {
        body.style.background = "#0c140d";
      }
      if (destination.index == 6) {
        body.style.background = "#FFD8BE";
      }
      if (destination.index == 7) {
        body.style.background = "#020914";
      }
    },
  });

  const fadeFirst = document.querySelectorAll(".animate-first");
  const fadeSecond = document.querySelectorAll(".animate-second");

  const appearOptions = {
    threshold: 0.4,
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  fadeFirst.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  fadeSecond.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

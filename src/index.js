import { gsap } from "gsap";

// gsap.from(".header");
// gsap.from(".link", { duration: 1, opacity: 0, delay: 1, stagger: 0.5 });
// gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });
// gsap.from(".left", { duration: 1, delay: 2, x: "-100%" });
// gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });
// gsap.fromTo(
//   ".button",
//   { opacity: 0, scale: 0, rotation: 720 },
//   { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5 }
// );

const timeline = gsap.timeline({ default: { duration: 1 } });

timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { opacity: 0, stagger: 0.5 })
  .from(".right", { x: "-100vw", ease: "power2.in" }, 1)
  .from(".left", { x: "-100%" }, "<.5")
  .to(".footer", { y: 0, ease: "elastic" })
  .fromTo(
    ".button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

document.querySelector(".button").addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});

// const obj = { x: 0 };

// gsap.to(obj, {
//   x: 100,
//   onUpdate: () => {
//     console.log(obj);
//   },
// });

import gsap from "gsap";

export const animationLoader = () => {
  var tl = gsap.timeline();

  // tl.to(".body", {
  //   display: "none",
  //   duration: 0.1,
  // });

  tl.to("#loadingboxmain", {
    duration: 0.8,
    ease: "power4.out",
    scale: "0.7",
  });

  tl.to(".loadingmain", {
    width: "100%",
    duration: 2,
    ease: "power1.out",
  });

  tl.to(".body", {
    display: "block",
    duration: 0.1,
  });

  tl.to(".main", {
    opacity: "0",
    duration: 0.2,
  });

  tl.to(".main", {
    delay: 0.2,
    display: "none",
  });
};

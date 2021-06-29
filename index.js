// CALL SCROLLTRIGGER PLUGIN
gsap.registerPlugin(ScrollTrigger);

// CREATE SPRITESHEET
const spriteSheet = {
  width: 640,
  height: 480,
  total: 75,
  cols: 1,
  rows: 75,
  duration: 1,
};

// CALL GSAP TIMELINE AND IMAGE SEQUENCE SCROLLTRIGGER
const tl = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    start: "top top",
    end: "+=100%",
  },
});

// FADEIN TITEL
tl.from(".heading", {
  opacity: 0,
  scale: 0.25,
}).to(".heading", {
  opacity: 1,
  scale: 1,
});

// IMAGE SEQUENCE ANIMATION
tl.from(".container", {
  scale: 2,
  duration: 0.75,
  ease: "power1.inOut",
}).to(".container", {
  scale: 3,
  duration: 1,
  autoAlpha: 0,
  ease: "back.inOut",
});

// FOR LOOP FOR IMAGE SEQUENCE.
// this goes through the spritesheet and all the frames in it.
for (let i = 0; i < spriteSheet.total; i++) {
  tl.set(
    ".frames",
    {
      x: (i % spriteSheet.cols) * -spriteSheet.width,
      y: Math.floor(i / spriteSheet.cols) * -spriteSheet.height,
    },
    (i / (spriteSheet.total - 1)) * spriteSheet.duration
  );
}

// ANIMATION TITEL
gsap.to(".heading", {
  scrollTrigger: {
    trigger: ".sec-02",
    start: "top top",
    end: "+=375%",
    scrub: true,
  },
  x: "185rem",
  ease: "power3.out",
  scale: 350,
});

// ANIMATION IMAGES
gsap.to(".static_image", {
  scrollTrigger: {
    trigger: ".img-container",
    start: "top",
    end: "+=375%",
    scrub: true,
  },
  scale: 0.4,
  duration: 1,
  ease: "power4.inOut",
  transformOrigin: "top center",
  delay: 1,
});

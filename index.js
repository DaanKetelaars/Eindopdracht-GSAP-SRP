gsap.registerPlugin(ScrollTrigger);


const spriteSheet = {
  width: 640,
  height: 480,
  total: 75,
  cols: 1,
  rows: 75,
  duration: 1,
};

const tl = gsap.timeline({
  scrollTrigger: {
    scrub: true,
    start: "top top",
    end: '+=100%',
  }
});

tl.from(
    ".heading", 
    {
        opacity: 0,
        scale: 0.25,
    },
).to (
    ".heading", 
    {
        opacity: 1,
        scale: 1,
        }
);


tl.from(
  ".container",
  {
    scale: 2,
    duration: .75,
    ease: "power1.inOut",
  },
).to(
  ".container",
  {
    scale: 3,
    duration: 1,
    autoAlpha: 0,
    ease: "back.inOut",
  },
);

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


gsap.to('.heading', {
  scrollTrigger: {
    trigger: '.sec-02', //this is the element that will trigger the animation
    start: 'top top', //this string defines the trigger and scroller start
    end: '+=180%', //this string defines the trigger and scroller end
    scrub: true //this tells GSAP to link animation progress to scroll progress
  },
  x: "185rem",
  duration: 2,
  ease: "power3.out",
  scale: 350,
  delay: 2,
})

gsap.to('.static_image', {
  scrollTrigger: {
    trigger: '.img-container', //this is the element that will trigger the animation
    start: 'top', //this string defines the trigger and scroller start
    end: '+=375%', //this string defines the trigger and scroller end
    scrub: true //this tells GSAP to link animation progress to scroll progress
  },
  scale: 0.4,
  duration: 1,
  ease: "power4.inOut",
  transformOrigin:'top center',
  delay: 1,
})

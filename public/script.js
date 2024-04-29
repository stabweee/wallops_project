gsap.registerPlugin(ScrollTrigger)

const t = gsap.timeline()
const split = new SplitType("#title")

gsap.from("#title", {
    opacity: 0,
    y: 100,
    duration: 1,
});
gsap.from(".char", {
    y: 100,
    stagger: {amount: 0.75},
    delay: 0.2,
    opacity: 0,
});

const body = document.getElementById('body');
const slides = gsap.utils.toArray('.slide')
slides.forEach((slide) => {
    gsap.fromTo(body, {
        y: window.innerHeight,
    }, {
        y: 0.5*window.innerHeight,
        scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "top 85%",
            scrub: true,
            markers: true,
        }
    });
})

// smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
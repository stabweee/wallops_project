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

gsap.to(body, {
    y: -window.innerHeight,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '#slide1',
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});
gsap.to(body, {
    y: -window.innerHeight,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '#slide2',
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});
gsap.to(body, {
    y: -window.innerHeight,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '#slide3',
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});
gsap.to(body, {
    y: -window.innerHeight,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '#slide4',
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});
gsap.to(body, {
    y: -window.innerHeight,
    ease: "power3.out",
    scrollTrigger: {
        trigger: '#slide5',
        start: "top bottom",
        end: "top top",
        scrub: true,
    }
});

// slides.forEach((slide) => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: slide,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//         }
//     });
//     tl.to(body, {
//         y: -window.innerHeight,
//         ease: "power3.out",
//     });
// })

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
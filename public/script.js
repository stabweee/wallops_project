gsap.registerPlugin(ScrollToPlugin)

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
const slides = gsap.utils.toArray('.slide');
document.querySelector('.hero').addEventListener('click', function() {
    gsap.to(window, {
        scrollTo: window.innerHeight,
        duration: 1,
        ease: 'expo',
    })
});

slides.forEach((slide) => {
    slide.addEventListener('click', function(event) {
        let middle = window.innerHeight / 2;
        if (event.clientY > middle) {
            gsap.to(window, {
                scrollTo: (slides.indexOf(slide) + 2)*window.innerHeight,
                duration: 1,
                ease: 'expo',
            });
        } else {
            gsap.to(window, {
                scrollTo: slides.indexOf(slide)*window.innerHeight,
                duration: 1,
                ease: 'expo',
            });
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
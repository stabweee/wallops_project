const t = gsap.timeline()
const split = new SplitType("#title")

gsap.from("#title", {
    opacity: 0,
    y: 100,
    duration: 1,
})
gsap.from(".char", {
    y: 100,
    stagger: {amount: 0.75},
    delay: 0.2,
    opacity: 0,
})
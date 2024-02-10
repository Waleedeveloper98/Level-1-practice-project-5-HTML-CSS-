var tl = gsap.timeline()
tl.to("#main header", {
    top:"0",
    duration:1,
    backgroundColor: "rgba(46, 46, 44, 1)",
    scrollTrigger:{
        trigger:"#main header",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
});
tl.from("#hero-container", {
    y:70,
    duration: 3,
    delay:1,
    scrollTrigger: {
        trigger: "#hero-container",
        scroller: "body",
        // markers: true,
        start: "top -1%",
        end: "top -2%",
        scrub:2
    }
});
tl.from("#p1-bottom",{
    opacity:0,
    duration:3,
})
gsap.registerPlugin(ScrollTrigger);

gsap.from('.card',{
    y:400,
    opacity:0,
    duration:5,
    ease:"power4.out",
    ScrollTrigger: {
        trigger: ".",
        start:"top 80%",
        markers: true,
    }

});

gsap.from('#image',{
    xPercent:-100,
    duration:5,
    opacity:0,
    ease: "power4.out",


})
gsap.from(".reserve",{
    xPercent:100,
    duration:5,
    opacity:0,
    ease:"power4.out",
    scrollTrigger:{
        trigger: ".reserve",
        start:"top 80%",
        markers: false,
        
    }
})

gsap.from("",{
    scale:100,
    duration:2,
})

console.log("js loaded");
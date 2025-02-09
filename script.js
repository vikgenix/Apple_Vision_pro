// NOTE this is a copied function of locomotive for smooth scrolling

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true  // Add smooth scrolling
    });

    // Sync Locomotive Scroll with ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    // Set up ScrollTrigger to use Locomotive Scroll as the scroll container
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and update Locomotive Scroll when necessary
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // After setup, refresh ScrollTrigger and update Locomotive Scroll
    ScrollTrigger.refresh();
}

loco();

gsap.to(".page>video", {
    scrollTrigger: {
        trigger: `.page>video`, // The video element itself will trigger the scroll animation
        start: `2 top%`,
        end: `bottom top`,
        scroller: `.main`
    },
    onStart: () => {
        document.querySelector(".page>video").play()
    }
})


// GSAP animation for video play on scroll
gsap.to(".page > video", {
    scrollTrigger: {
        trigger: `.page > video`,
        start: `2% top`,
        end: `bottom top`,
        scroller: `.main`
    },
    onStart: () => {
        document.querySelector(".page > video").play(); // Play video when it enters the viewport
    }
});

// GSAP animation timeline for scrolling effect
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: `.page1`,
        start: `top top`,
        scrub: 2,  // Adds smooth scrolling between the start and end points
        scroller: `.main`,
        pin: true  // Pins the section during scroll
    }
});

// Animating `.page1 > h1` vertically with a top movement
tl.to(".page1 > h1", {
    top: `-50%`
});



// GSAP animation timeline for scrolling effect
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: `.page2`,
        start: `top top`,
        scrub: 2,  // Adds smooth scrolling between the start and end points
        scroller: `.main`,
        pin: true  // Pins the section during scroll
    }
});

// Animating `.page2 > h1` vertically with a top movement
tl.to(".page2 > h1", {
    top: `-50%`
});


// GSAP animation timeline for scrolling effect
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: `.page4`,
        start: `top top`,
        scrub: 2,  // Adds smooth scrolling between the start and end points
        scroller: `.main`,
        pin: true  // Pins the section during scroll
    }
});

// Animating `.page4 > h1` vertically with a top movement
tl.to(".page4 > h1,h5", {
    top: `-50%`
});



// GSAP animation timeline for scrolling effect
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: `.page6`,
        start: `top top`,
        scrub: 2,  // Adds smooth scrolling between the start and end points
        scroller: `.main`,
        pin: true  // Pins the section during scroll
    }
});

// Animating `.page6 > h1` vertically with a top movement
tl.to(".page6 > h1,h5", {
    top: `-50%`
});
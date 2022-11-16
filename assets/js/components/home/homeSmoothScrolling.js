gsap.registerPlugin(ScrollTrigger, SplitText);


window.addEventListener("load", function () {

  const pageContainer = document.querySelector(".smoothScrollingWrapper");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    inertia: 0.8,
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true
    },
    tablet: {
        smooth: true
    }
  });
  
  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });
    
  scroller.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length ?
      scroller.scrollTo(value, 0, 0) :
      scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight };

    },

    pinType: pageContainer.style.transform ? "transform" : "fixed" });


  // >> hide and show stiky nav logo
  gsap.to("._js_navLogo", {
    scrollTrigger: {
      scroller: "[data-scroll-container]",
        trigger: "._about",
        scrub: true,
        end: "+=100px",
    },

    y: -100,
    opacity: 0,
    duration: 1,
  })



  // >> Alhamdulillah



  gsap.from("._about_doctor", {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger : {
      scroller: "[data-scroll-container",
      trigger: "._about_doctor",
      start: "top 80%",
      // scrub: true, 
      // markers: true
  },
  })






// >> Marquee sesction start
gsap.to("._marquee_section", {
  y: -100,
  scrollTrigger : {
    scroller: "[data-scroll-container",
    trigger: "._marquee_section",
    start: "top bottom",
    scrub: true, 
    // markers: true
  },
})

gsap.to(".wrapper_img_card", {
  scale: 0.97,
  y: -50,
  scrollTrigger : {
    scroller: "[data-scroll-container",
    trigger: ".wrapper_img_card",
    start: "top bottom",
    scrub: true, 
    // markers: true
  },
})




/* --- Split the text, Client Title --- */
function setupSplits() {
  const targets = gsap.utils.toArray("._splitTextClient");
  targets.forEach((target) => {
    let SplitClient = new SplitText(target, { type: "words,chars" });
    let chars = SplitClient.chars; //an array of all the divs that wrap each character
    gsap.from(chars, {
      delay: 0.5,
    y: 50,
    stagger: 0.01,
    ease: "back.out",
    opacity: 0,
    duration: 0.8,
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: target,
        // markers: true,
        start: "top 80%",
        end: "bottom center",
        // scrub: true
      }
    });
  });
}

setupSplits();









gsap.from("._counter_ani", {
  textContent: "0",
  duration: 4,
  ease: "power1.inOut",
  modifiers: {
    textContent: value => formatNumber(value, 0) 
  },
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "._counter_ani",
    // start: "100px 80%",
    // end: "+=100",
    toggleActions: "play none none reverse",
  }
});


// >> Number animatinon
function formatNumber(value, decimals) {
  let s = (+value).toLocaleString('en-US').split(".");
  return decimals ? s[0] + "." + ((s[1] || ".") + "00000000").substr(0, decimals) : s[0];
}
















});
    






























// >> Refresh scroll trigger
// ScrollTrigger.addEventListener("refresh", () => { 
//  scroller.update()
// });

// ScrollTrigger.refresh();  


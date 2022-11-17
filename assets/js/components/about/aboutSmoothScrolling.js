window.addEventListener("load", () => {

gsap.registerPlugin(ScrollTrigger, SplitText);

const pageContainer = document.querySelector(".about_smooth_scrollingWrapper");
pageContainer.setAttribute("data-scroll-container", "");

const scroller = new LocomotiveScroll({
  el: pageContainer,
  inertia: 0.8,
  smooth: true,
  getDirection: true });

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



// >> About
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

      
    gsap.to("._lang_flags", {
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
    
      

    // >> Animate wrapper image
    gsap.to(".wrapper_img_card", {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
            trigger: ".wrapper_img_card",
            scrub: true
        },

        scale: 0.97,
        duration: 5,
    })


// >> =======================================================================================================================================
// >>                                              Animate About section                                                                   //

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
        markers: true,
        start: "top 80%",
        end: "bottom top",
        // scrub: true
      }
    });
  });
}

setupSplits();



const myDetailsTitle = document.querySelector("#myDetailsSplitText_1");

gsap.from(myDetailsTitle, {
  delay: 0.5,
  y: 30,
  stagger: 0.02,
  opacity: 0,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#myDetailsSplitText_1",
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
});

const myDetailsheading = document.querySelector("#myDetailsSplitText_2");
const myDetailsHeadingSPlitText = new SplitText(myDetailsheading, {type: "words, chars"});

gsap.from(myDetailsHeadingSPlitText.chars, {
  delay: 0.5,
  y: 50,
  stagger: 0.01,
  ease: "back.out",
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: myDetailsheading,
    markers: true,
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
});



// >> my details SPlittext
const myDetailsTitle_3 = document.querySelector("#myDetailsSplitText_3");

gsap.from(myDetailsTitle_3, {
  delay: 0.5,
  y: 30,
  stagger: 0.02,
  opacity: 0,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#myDetailsSplitText_3",
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
});


// >> Ex spliTtext
let exSPlitText = new SplitText("#experienceSectionSplitText2", { type: "words,chars" });

gsap.from(exSPlitText.chars, {
  delay: 0.5,
y: 50,
stagger: 0.01,
ease: "back.out",
opacity: 0,
duration: 0.8,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#experienceSectionSplitText2",
    markers: true,
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
});























})
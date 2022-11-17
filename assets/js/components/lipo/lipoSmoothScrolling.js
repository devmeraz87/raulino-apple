gsap.registerPlugin(ScrollTrigger, SplitText);
  
  
  // ScrollTrigger.addEventListener("refresh", () => { 
    
  //   scroller.update()
  // });

  // ScrollTrigger.refresh();



window.addEventListener("load", () => {

    
    const pageContainer = document.querySelector(".lipo_smooth_scrollingWrapper");
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



    // >> hide and show stiky nav logo
    gsap.to("._js_navLogo", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
          trigger: "._ultra_hd_ugraft",
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
          trigger: "._ultra_hd_ugraft",
          scrub: true,
          end: "+=100px",
      },
    
      y: -100,
      opacity: 0,
      duration: 1,
    })
    
      








/* --- Split the text, Client Title --- */
function setupSplits() {
  const targets = gsap.utils.toArray("._splitTextClient");
  targets.forEach((target) => {
    let SplitClient = new SplitText(target, { type: "words,chars" });
    let chars = SplitClient.chars; //an array of all the divs that wrap each character
    gsap.from(chars, {
      delay: 0.5,
    y: 30,
    stagger: 0.01,
    ease: "back.out",
    opacity: 0,
    duration: 1,
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: target,
        start: "top 80%",
        end: "bottom top",
        // scrub: true
      }
    });
  });
}

setupSplits();




// >> run ultra hd splittext
let ultraHd_1 = document.querySelector("#ultra_hd_title_1");
let ultraHd_1_splitText = new SplitText(ultraHd_1, {type: "lines, words, chars"});

gsap.from(ultraHd_1_splitText.lines, {
  delay: 0.5,
  y: 30,
  stagger: 0.02,
  opacity: 0,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#ultra_hd_title_1",
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
})


// > ultra hd heading
let ultraHd_2 = document.querySelector("#ultra_hd_hading");
let ultraHd_2_splitText = new SplitText(ultraHd_2, {type: "words, chars"});

gsap.from(ultraHd_2_splitText.chars, {
  delay: 0.5,
  y: 20,
  stagger: 0.02,
  opacity: 0,
  ease: "back.out",
  duration: 0.5,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#ultra_hd_hading",
    start: "top 80%",
    end: "bottom top",
    // scrub: true
  }
})


// >> ultra hd title 2
let ultraHd_3 = document.querySelector("#ultra_hd_title_2");
let ultraHd_3_splitText = new SplitText(ultraHd_3, {type: "lines, words, chars"});

gsap.from(ultraHd_3_splitText.lines, {
  delay: 0.5,
  y: 20,
  stagger: 0.02,
  opacity: 0,
  ease: "back.out",
  duration: 1,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#ultra_hd_title_2",
    start: "top 90%",
    end: "bottom top",
    // scrub: true
  }
})





gsap.from("#ultra_hd_btn", {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    scroller: "[data-scroll-container]",
    trigger: "#ultra_hd_btn",
    start: "top 80%",
  }

})























})






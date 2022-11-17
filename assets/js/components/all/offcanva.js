// >> Register plugin /
gsap.registerPlugin( SplitText );

// >> Get nessesariy element
const body = document.body;
const btnBurger = document.querySelector("._burger_btn");
const offCanva = document.querySelector("._offCanva");

// >> get offcanva links
// let offCanvaSplitText = new SplitText("#_offCanvaSplitText", { type: "chars" }),
//   offCanvaSplitTextChar = offCanvaSplitText.chars;

// gsap.set("#_offCanvaSplitText", { perspective: 800 });


// >> Toggle Menu
let menuOpen = false;

// >> OffCanvaFunction /
btnBurger.addEventListener("click", () => {
    if(!menuOpen) {
        // // >> Add class
        offCanva.classList.add("_active");
        btnBurger.classList.add("_active");
        body.classList.add("_document_locked");



        gsap.to("#_gsap_offCanva_links", {
            y: "0",
            duration: 1.5,
            ease: "expo.inOut",
            position: "fixed",
            opacity: 1
        })

        gsap.to("._js_navLogo", {
            opacity: 0,
            duration: 1
        })

        gsap.to("#_gsap_offCanvaLeft", {
            // y: "0",
            height: "100%",
            duration: 1.5,
            delay: 0.1,
            ease: "expo.inOut",
        })

        gsap.to("#_gsap_offCanvaRight", {
            // y: 0,
            height: "100%",
            duration: 1.5,
            ease: "expo.inOut"
        })

        gsap.to("._lang_flags_items", {
            opacity: 0,
            duration: 1
        })


        let offCanvaSplitText = new SplitText("#_offCanvaSplitText", { type: "chars" }),
             offCanvaSplitTextChar = offCanvaSplitText.chars;

            gsap.set("#_offCanvaSplitText", { perspective: 800 });        

        // >> Animate offCanva text /
        gsap.from(offCanvaSplitTextChar, {
            delay: 1,
            duration: 0.5,
            opacity: 0,
            scale: 1,
            y: 2,
            rotationX: -10,
            transformOrigin: "0% 50% -50",
            ease: "Back.InOut",
            stagger: 0.01,
            onComplete: () => {
                offCanvaSplitText.revert();
            }
          })

        menuOpen = true;

    } else {
        // // >> Remove offCanva Active calss
        offCanva.classList.remove("_active");
        btnBurger.classList.remove("_active");
        body.classList.remove("_document_locked");

        gsap.to("#_gsap_offCanva_links", {
            y: "-110vh",
            duration: 1.5,
            delay: 0.1,
            ease: "expo.inOut",
            position: "fixed",
            opacity: 0
        })

        gsap.to("#_gsap_offCanvaLeft", {
            height: "0%",
            delay: 0.1,
            duration: 1.5,
            ease: "expo.inOut",
        })

        gsap.to("#_gsap_offCanvaRight", {
            height: "0%",
            duration: 1.5,
            ease: "expo.inOut"
        })

        gsap.to("._lang_flags_items", {
            delay: 1,
            opacity: 1,
            duration: 1
        })

        gsap.to("._js_navLogo", {
            opacity: 1,
            duration: 1
        })


        menuOpen = false;
    }
})


// >> Please don't Remove this
const style = ["color: #eee", "background: #111", "padding: 8px", "margin-bottom: 3px", "border-radius: 3px"].join(";");
console.log("%cMasterpiece by EMON MERAZ SAMIUL ⚡", style);
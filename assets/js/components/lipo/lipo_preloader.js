// >> For loading content
const secondEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");
gsap.registerPlugin(ScrollTrigger, SplitText);

(function(){
    function id(M){ return document.getElementById(M); }
    function loadbar() {
        var prog = id("progress"),
        starter = id("starter"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      starter.innerHTML = "DR EDUARDO F. RAULINO";
      prog.style.width = perc;
      if(c===tot) return doneLoading();
    }
      function doneLoading(){
        setTimeout(function(){ 
            // >> remove loader
            gsap.to("#_first_loading", {duration: 1.5, delay: 1, ease: secondEase, height: "0%"});

            // >> Animate hero text
            // >> Home split text start / 
            function setupSplits() {
                const targets = gsap.utils.toArray("._splitTextClienthero");
                targets.forEach((target) => {
                  let SplitClient = new SplitText(target, { type: "words,chars" });
                  let chars = SplitClient.chars; //an array of all the divs that wrap each character
                  gsap.from(chars, {
                    delay: 3,
                  y: 5,
                  stagger: 0.01,
                  ease: "back.out",
                  opacity: 0,
                  duration: 1,
                  onComplete: () => {
                    SplitClient.revert();
                  }
                  });
                });
              }
              
              setupSplits();
              


            const hero_btn = this.document.querySelector("#_js_hero_btn");
            gsap.from(hero_btn, {
                delay: 3,
                duration: 1,
                opacity: 0, 
                y: 100,
                ease: "Back.InOut",
            })

            const hero_circle = this.document.querySelector("#_js_hero_circle");
            gsap.from(hero_circle, {
                delay: 3,
                duration: 1,
                opacity: 0, 
                y: 100,
                ease: "Back.InOut",
            })

        }, 500);
      }

      // >> Get Images
      for(var i=0; i<tot; i++) {
        var tImg     = new Image();
        tImg.onload  = imgLoaded;
        tImg.onerror = imgLoaded;
        tImg.src     = img[i].src;
      }    
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
  }());


  
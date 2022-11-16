// >> For loading content
const secondEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");

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
        starter.innerHTML = "Eduardo";
        prog.style.width = perc;
        if(c===tot) return doneLoading();
      }
      function doneLoading(){
        setTimeout(function(){ 
            // >> remove loader
            gsap.to("#_first_loading", {duration: 1.5, delay: 1, ease: secondEase, height: "0%"});
            gsap.to("#_second_loading", {duration: 1.5,   delay: 3, ease: secondEase, height: "0%"});

            // >> Animate hero text
            // >> hero heading //
            var aboutTimeLine = gsap.timeline(),
            aboutHeroHeadingSplitText = new SplitText("#aboutHeroSplitText", { type: "chars" }),
            aoboutHeroHeadingSplitTextCharecter = aboutHeroHeadingSplitText.chars; //an array of all the divs that wrap each character
            
            aboutTimeLine.from(aoboutHeroHeadingSplitTextCharecter, {
              delay: 5,
              duration: 0.5,
              opacity: 0,
              scale: 1,
              y: 2,
              rotationX: -20,
              transformOrigin: "0% 50% -50",
              ease: "Back.InOut",
              stagger: 0.02,
              onComplete: () => {
                aboutHeroHeadingSplitText.revert();
              }
            });


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


  
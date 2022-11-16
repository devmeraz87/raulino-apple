// >> For loading content
const homeVideo_1 = document.querySelector("._js_video_1");
const video_1_play_btn = document.querySelector(".js_video_1_play_btn")
const video_1_context = document.querySelector(".js_video_1_context");
const video_1_close_btn = document.querySelector("._video_1_pause_btn");
const video_1_close_btn_icon = video_1_close_btn.querySelector("._video_1_icon");


video_1_play_btn.addEventListener("click", () => {

    homeVideo_1.play();
    homeVideo_1.setAttribute("loop", "true");

    gsap.to(homeVideo_1, {
      opacity: 1,
      duration: 1
    })

    gsap.to(video_1_context, {
      opacity: 0,
      duration: 1,
    })

    gsap.to(video_1_close_btn_icon, {
      y: 0,
      duration: 1
    })
})


video_1_close_btn.addEventListener("click", () => {
  gsap.to(video_1_context, {
    opacity: 1,
    duration: 2,
  })

  gsap.to(video_1_close_btn_icon, {
    y: -100,
    duration: 2
  })

  gsap.to(homeVideo_1, {
    opacity: 0,
    duration: 2
  })

  setTimeout(() => {
    homeVideo_1.pause();
  }, 1000);
})




// >> Hoem video 2
const homeVideo_2 = document.querySelector("._js_video_2");
const video_2_play_btn = document.querySelector("._js_video_2_play_btn")
const video_2_close_btn = document.querySelector("._video_2_close_btn");
const video_2_close_btn_icon = video_2_close_btn.querySelector("._video_2_icon");


video_2_play_btn.addEventListener("click", () => {

    homeVideo_2.play();
    homeVideo_2.setAttribute("loop", "true");
    video_2_close_btn.classList.add("_active");

    gsap.to(video_2_play_btn, {
      opacity: 0,
      duration: 1,
    })

    gsap.to(video_2_close_btn_icon, {
      y: 0,
      duration: 1
    })
})


video_2_close_btn.addEventListener("click", () => {

  video_2_close_btn.classList.remove("_active");
  
  gsap.to(video_2_play_btn, {
    opacity: 1,
    duration: 2,
  })

  gsap.to(video_2_close_btn_icon, {
    y: -100,
    duration: 2
  })


  setTimeout(() => {
    homeVideo_2.pause();
  }, 1000);
})



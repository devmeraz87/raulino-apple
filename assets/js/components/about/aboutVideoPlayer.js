// >> For loading content
const homeVideo_1 = document.querySelector("._video");
const video_1_play_btn = document.querySelector(".js_video_1_play_btn")
const video_1_context = document.querySelector(".js_video_1_context");
const video_1_close_btn = document.querySelector("._video_1_pause_btn");
const video_1_close_btn_icon = video_1_close_btn.querySelector("._video_1_icon");
const videoOverlay = document.querySelector("._overlay");
const video_bg_card = document.querySelector("._video_card")


const iframe = document.getElementById('video_1_frame');

const player = $f(iframe);


video_1_play_btn.addEventListener("click", () => {


  setTimeout(() => {
    player.api("play");
  }, 500);


  videoOverlay.classList.add("_eventNone")
  video_1_context.classList.add("_eventNone")
  video_bg_card.classList.add("_transparent");

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
    player.api("pause");
  }, 500);

  videoOverlay.classList.remove("_eventNone")
  video_1_context.classList.remove("_eventNone")
  video_bg_card.classList.remove("_transparent");

})


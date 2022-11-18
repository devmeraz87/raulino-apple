// >> For loading content
const homeVideo_1 = document.querySelector("._video");
const video_1_play_btn = document.querySelector(".js_video_1_play_btn")
const video_1_context = document.querySelector(".js_video_1_context");
const video_1_close_btn = document.querySelector("._video_1_pause_btn");
const video_1_close_btn_icon = video_1_close_btn.querySelector("._video_1_icon");
const video_bg_card = document.querySelector("._video_card")

const videoOverlay = document.querySelector("._overlay");

const iframe = document.getElementById('video_1_frame');

const player = $f(iframe);

video_1_play_btn.addEventListener("click", () => {


  videoOverlay.classList.add("_eventNone")
  video_1_context.classList.add("_eventNone")
  video_bg_card.classList.add("_transparent");

  setTimeout(() => {
    player.api("play");
  }, 500);


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




// >> Hoem video 2
const video_2_play_btn = document.querySelector("._js_video_2_play_btn")
const video_2_close_btn = document.querySelector("._video_2_close_btn");
const video_2_close_btn_icon = video_2_close_btn.querySelector("._video_2_icon");
const video_2_img = document.querySelector(".video_2_img");

const iframe2 = document.getElementById('video_2_frame');

const player2 = $f(iframe2);


video_2_play_btn.addEventListener("click", () => {


  setTimeout(() => {
    player2.api("play");
  }, 500);


  gsap.to(video_2_img, {
    opacity: 0,
    duration: 1
  })

    video_2_close_btn.classList.add("_active");


    gsap.to(video_2_play_btn, {
      opacity: 0,
      duration: 1,
    })


    gsap.to(iframe2, {
      opacity: 1,
      duration: 1,
    })

    gsap.to(video_2_close_btn_icon, {
      y: 0,
      duration: 1
    })
})


video_2_close_btn.addEventListener("click", () => {

  video_2_close_btn.classList.remove("_active");


  gsap.to(video_2_img, {
    opacity: 1,
    duration: 1
  })
  
  
  gsap.to(video_2_play_btn, {
    opacity: 1,
    duration: 2,
  })

  gsap.to(video_2_close_btn_icon, {
    y: -100,
    duration: 2
  })


  gsap.to(iframe2, {
    opacity: 0,
    duration: 1,
  })


  setTimeout(() => {
    player2.api("pause");
  }, 500);

})



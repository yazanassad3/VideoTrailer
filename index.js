const ButtonEl=document.querySelector(".btn");
const VideoShow=document.querySelector(".trailer-movie");
const Video=document.querySelector("video");
const closeEl = document.querySelector("i");


ButtonEl.addEventListener("click",()=>{
    VideoShow.classList.remove("active");
    Video.currentTime=0;
    Video.pause;
});

closeEl.addEventListener("click",()=>{
    VideoShow.classList.add("active");
});
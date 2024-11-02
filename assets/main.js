let msPlay = document.getElementById("ms-play");
const music = new Audio("https://uploadkon.ir/uploads/f8ba01_241.mp3");
let wave = document.querySelectorAll(".wavel");
const posterMaster = document.getElementById("poster-master");
const title = document.getElementById("title");
let startTime = document.getElementById("start-time");
let endTime = document.getElementById("end-time");
let seek = document.getElementById("seek");
let seek2 = document.getElementById("seek2");
let dot = document.getElementsByClassName("dot")[0];
let volIcon = document.getElementById('vol-icon')
let vol = document.getElementById('vol')
let volBar = document.getElementById('vol-bar')
let dotBar = document.getElementsByClassName('dot-bar')[0]
let back = document.getElementById('back')
let next = document.getElementById('next')

const songs = [
  {
    id: "1",
    songName: `Renegade
                <div class="subtitle">Aaryan Shah</div>`,
    poster: "https://uploadkon.ir/uploads/0d3501_241.jpg",
    song: "https://uploadkon.ir/uploads/f8ba01_241.mp3",
  },
  {
    id: "2",
    songName: `Long Way Home
                <div class="subtitle">Husa</div>`,
    poster: "https://uploadkon.ir/uploads/d72301_242.jpg",
    song: "https://uploadkon.ir/uploads/081a01_242.mp3",
  },
  {
    id: "3",
    songName: `Red Eye
                <div class="subtitle">Aaryan Shah</div>`,
    poster: "https://uploadkon.ir/uploads/0aff01_243.jpg",
    song: "https://uploadkon.ir/uploads/9d4001_243.mp3",
  },
  {
    id: "4",
    songName: `Empty Note
                <div class="subtitle">Ghostly Kisses</div>`,
    poster: "https://uploadkon.ir/uploads/105601_244.jpg",
    song: "https://uploadkon.ir/uploads/63dc01_244.mp3",
  },
  {
    id: "5",
    songName: `Black Day
                <div class="subtitle">Monolink</div>`,
    poster: "https://uploadkon.ir/uploads/719c01_245.jpg",
    song: "https://uploadkon.ir/uploads/093201_245.mp3",
  },
  {
    id: "6",
    songName: `Flute_Fantasy
                <div class="subtitle">DJ_Nasha</div>`,
    poster: "https://uploadkon.ir/uploads/36ed01_246.jpg",
    song: "https://uploadkon.ir/uploads/87d701_246.mp3",
  },
  {
    id: "7",
    songName: `Empire
                  <div class="subtitle">Two Are</div>`,
    poster: "https://uploadkon.ir/uploads/f70e01_248.jpg",
    song: "https://uploadkon.ir/uploads/fd8f01_247.mp3",
  },
  {
    id: "8",
    songName: `Derzo
                  <div class="subtitle">Malice</div>`,
    poster: "https://uploadkon.ir/uploads/aceb01_249.jpg",
    song: "https://uploadkon.ir/uploads/e98e01_248.mp3",
  },
  {
    id: "9",
    songName: `ET TU?
                  <div class="subtitle">Arryan Shah</div>`,
    poster: "https://uploadkon.ir/uploads/13a501_2410.jpg",
    song: "https://uploadkon.ir/uploads/fab901_249.mp3",
  },
  {
    id: "10",
    songName: `Vajba Nema
                  <div class="subtitle">Zomb</div>`,
    poster: "https://uploadkon.ir/uploads/b1d801_2411.jpg",
    song: "https://uploadkon.ir/uploads/8b6f02_24aaryan-shah-dissociation.mp3",
  },
  {
    id: "11",
    songName: `Khodahafez
                  <div class="subtitle">Hidden</div>`,
    poster: "https://uploadkon.ir/uploads/b2d201_2412.jpg",
    song: "https://uploadkon.ir/uploads/704e01_2411.mp3",
  },
  {
    id: "12",
    songName: `Out Of Control
                  <div class="subtitle">k-Paul</div>`,
    poster: "https://uploadkon.ir/uploads/5a7401_2413.jpg",
    song: "https://uploadkon.ir/uploads/fc9a01_2412.mp3",
  },
  {
    id: "13",
    songName: `Rppin Kittin
                  <div class="subtitle">Miss Kittin</div>`,
    poster: "https://uploadkon.ir/uploads/00c401_2414.jpg",
    song: "https://uploadkon.ir/uploads/9e9201_2413.mp3",
  },
];

Array.from(document.getElementsByClassName("songitem")).forEach((val, i) => {
  val.getElementsByTagName("img")[0].src = songs[i].poster;
  val.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

msPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    msPlay.classList.remove("bi-play-fill");
    msPlay.classList.add("bi-pause-fill");
    wave[0].classList.add("anime1");
    wave[1].classList.add("anime1");
    wave[2].classList.add("anime1");
  } else {
    music.pause();
    msPlay.classList.remove("bi-pause-fill");
    msPlay.classList.add("bi-play-fill");
    wave[0].classList.remove("anime1");
    wave[1].classList.remove("anime1");
    wave[2].classList.remove("anime1");
  }
});

let index = 0;

const pausplay=()=>{    
  Array.from(document.getElementsByClassName("playlistplay")).forEach((val) => {
    val.classList.remove("bi-pause-circle-fill");
    val.classList.add("bi-play-circle-fill");
  });
};

const backplay = () => {
  Array.from(document.getElementsByClassName("songitem")).forEach((val) => {
    val.style.background = "rgb(105, 105, 170, 0)";
  });
};

Array.from(document.getElementsByClassName("playlistplay")).forEach(
  (val, i) => {
    val.addEventListener("click", (e) => {
      pausplay();
      index = e.target.id;
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      music.src = songs[i].song;
      posterMaster.src = songs[i].poster;
      music.src = songs[i].song;
      title.innerHTML = songs[i].songName;
      music.play();
      msPlay.classList.add("bi-pause-fill");
      msPlay.classList.remove("bi-play-fill");
      wave[0].classList.add("anime1");
      wave[1].classList.add("anime1");
      wave[2].classList.add("anime1");
      music.addEventListener("ended", () => {
        msPlay.classList.remove("bi-pause-fill");
        msPlay.classList.add("bi-play-fill");
        wave[0].classList.remove("anime1");
        wave[1].classList.remove("anime1");
        wave[2].classList.remove("anime1");
      });
      backplay()
      Array.from(document.getElementsByClassName("songitem"))[
        `${index-1}`
      ].style.background = "rgb(105, 105, 170, 0.1)";
    });
  }
);

music.addEventListener("timeupdate", () => {
  let music_cura = music.currentTime;
  let music_dura = music.duration;
  let min = Math.floor(music_dura / 60);
  let sec = Math.floor(music_dura % 60);
  endTime.innerHTML = `${min}:${sec}`;
  if (sec<10) {

    endTime.innerHTML = `${min}:0${sec}`;
    
    
  }
  let min1 = Math.floor(music_cura / 60);
  let sec1 = Math.floor(music_cura % 60);
  startTime.innerHTML = `${min1}:${sec1}`;
  if (sec1<10) {
    startTime.innerHTML = `${min1}:0${sec1}`;
  }
  let progress = parseInt((music.currentTime/music.duration)*100)
  seek.value = progress
  let seekbar = seek.value
  seek2.style.width = `${seekbar}%`
  dot.style.left = `${seekbar}%`
});

seek.addEventListener('change' , ()=>{
    music.currentTime = seek.value * music.duration/100
})

music.addEventListener('ended' , ()=>{
    msPlay.classList.remove("bi-pause-fill");
    msPlay.classList.add("bi-play-fill");
    wave[0].classList.remove("anime1");
    wave[1].classList.remove("anime1");
    wave[2].classList.remove("anime1");  
})



vol.addEventListener('change' , (e)=>{
    
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.add('bi-volume-mute-fill')
        volIcon.classList.remove('bi-volume-up-fill')
    }
    if (vol.value > 0) {
        volIcon.classList.remove('bi-volume-mute-fill')
        volIcon.classList.add('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-up-fill')

    }
    if (vol.value > 50) {
        volIcon.classList.remove('bi-volume-down-fill')
        volIcon.classList.remove('bi-volume-mute-fill')
        volIcon.classList.add('bi-volume-up-fill')
    }

    let volA = vol.value
    console.log(volA);
    volBar.style.width = `${volA}%`
    dotBar.style.left = `${volA}%`
    music.volume = volA/100
})

back.addEventListener('click', ()=>{
    index -=1
    if (index <1) {
        index = Array.from(document.getElementsByClassName('songitem')).length
    }
    
    posterMaster.src = songs[index-1].poster;
    music.src = songs[index-1].song;
    title.innerHTML = songs[index-1].songName;
    music.play()
    pausplay()
    
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
      wave[0].classList.add("anime1");
      wave[1].classList.add("anime1");
      wave[2].classList.add("anime1");
      backplay()
      Array.from(document.getElementsByClassName("songitem"))[
        `${index-1}`
      ].style.background = "rgb(105, 105, 170, 0.1)";
})
let x =Array.from(document.getElementsByClassName('songitem')).length
next.addEventListener('click', ()=>{
 console.log(x);
    index -=0
    index +=1
    if (index > Array.from(document.getElementsByClassName('songitem')).length) {
        index=1 
    }
    
    posterMaster.src = songs[index-1].poster;
    music.src = songs[index-1].song;
    title.innerHTML = songs[index-1].songName;
    music.play()
    pausplay()
    
    document.getElementById(`${index}`).classList.add("bi-pause-fill");
    document.getElementById(`${index}`).classList.remove("bi-play-fill");
      wave[0].classList.add("anime1");
      wave[1].classList.add("anime1");
      wave[2].classList.add("anime1");
      backplay()
      Array.from(document.getElementsByClassName("songitem"))[
        `${index-1}`
      ].style.background = "rgb(105, 105, 170, 0.1)";
})
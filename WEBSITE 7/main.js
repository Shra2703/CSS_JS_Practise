let songs = [
  {
    songName: "Kahriyat-Chichore Movie",
    filePath: "my_songs/0.mp3",
    coverPath:
      "https://m.media-amazon.com/images/M/MV5BN2Y0YjJkMTctNjNmMC00MDkyLTkzZDktMWZmNTdmN2YyNWNmXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg",
    timeStamp: "4:59",
  },
  {
    songName: "Woh din - Chichore Movie",
    filePath: "my_songs/1.mp3",
    coverPath: "images/w.jpg",
    timeStamp: "3:09",
  },
  {
    songName: "Rait Zara Si - Atrangi Re",
    filePath: "my_songs/3.mp3",
    coverPath:
      "https://i1.sndcdn.com/artworks-6Z1IdLdrFWkyR8nz-zsdpuQ-t500x500.jpg",
    timeStamp: "5:06",
  },
  {
    songName: "Kesariya-Brahmashtra Movie",
    filePath: "my_songs/4.mp3",
    coverPath:
      "https://miro.medium.com/v2/resize:fit:1358/0*N63W99W3KnMv7tjU.jpg",
    timeStamp: "2:53",
  },
  {
    songName: "Guli Mata",
    filePath: "my_songs/7.mp3",
    coverPath: "images/Guli.jpg",
    timeStamp: "4:51",
  },
];

let audio = new Audio();
let selectedSong = 0;
let leftPart = document.querySelector("#left");
let playBtn = document.querySelector("#play");
let backBtn = document.querySelector("#backward");
let forwardBtn = document.querySelector("#forward");
let flag = true;

function showSongsData() {
  let clutter = "";
  songs.forEach((song, index) => {
    clutter += `
        <div class="song-card" id =  ${index}>
            <div class="part1">
              <img
                src= ${song.coverPath}
                alt=${song.songName}
              />
              <h3>${song.songName}</h3>
            </div>
            <h6>${song.timeStamp}</h6>
          </div>
        `;
  });

  audio.src = songs[selectedSong].filePath;
  leftPart.style.backgroundImage = `url(${songs[selectedSong].coverPath})`;

  document.querySelector("#all-songs").innerHTML = clutter;
}

function playSongs() {
  let allSongs = document.querySelector("#all-songs");
  allSongs.addEventListener("click", (dets) => {
    selectedSong = dets.target.id;
    showSongsData();
    audio.play();

    play.innerHTML = `<i class="ri-pause-fill">`;
    flag = false;
  });
}

function playBtnFunction() {
  playBtn.addEventListener("click", () => {
    if (flag == true) {
      play.innerHTML = `<i class="ri-pause-fill">`;
      flag = false;
      showSongsData();
      audio.play();
    } else {
      play.innerHTML = `<i class="ri-play-fill">`;
      flag = true;
      showSongsData();
      audio.pause();
    }
  });
}

function backBtnfunc() {
  backBtn.addEventListener("click", () => {
    if (selectedSong < 0) return;
    selectedSong--;
    showSongsData();
    audio.play();

    play.innerHTML = `<i class="ri-pause-fill">`;
    flag = false;
  });
}

function forwardBtnfunc() {
  forwardBtn.addEventListener("click", () => {
    if (selectedSong >= songs.length - 1) return;
    selectedSong++;
    console.log(selectedSong);
    showSongsData();
    audio.play();
    play.innerHTML = `<i class="ri-pause-fill">`;
    flag = false;
  });
}

showSongsData();
playSongs();
playBtnFunction();
backBtnfunc();
forwardBtnfunc();

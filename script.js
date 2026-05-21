const songs = [{
        title: "Halik Sobrang Diin",
        artist: "Gat Putch",
        genre: "OPM / Indie",
        src: "music/song1.mp3",
        cover: "images/album1.jpg",
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        genre: "Synth-pop",
        src: "music/song2.mp3",
        cover: "images/album2.png",
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        genre: "Disco-pop",
        src: "music/song3.mp3",
        cover: "images/album3.jpg",
    },
    {
        title: "Stay",
        artist: "Justin Bieber",
        genre: "Pop",
        src: "music/song4.mp3",
        cover: "images/album4.jpg",
    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        genre: "Pop Rock",
        src: "music/song5.mp3",
        cover: "images/album5.jpg",
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic Pop",
        src: "music/song6.mp3",
        cover: "images/album6.webp",
    },
    {
        title: "Peaches",
        artist: "Justin Bieber",
        genre: "R&B / Pop",
        src: "music/song7.mp3",
        cover: "images/album7.webp",
    },
    {
        title: "Bad Habits",
        artist: "Ed Sheeran",
        genre: "Dance-pop",
        src: "music/song8.mp3",
        cover: "images/album8.webp",
    },
    {
        title: "Senorita",
        artist: "Shawn Mendes",
        genre: "Latin Pop",
        src: "music/song9.mp3",
        cover: "images/album9.webp",
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop",
        src: "music/song10.mp3",
        cover: "images/album10.webp",
    },
    {
        title: "Closer",
        artist: "The Chainsmokers",
        genre: "EDM / Pop",
        src: "music/song11.mp3",
        cover: "images/album11.webp",
    },
    {
        title: "Calm Down",
        artist: "Rema",
        genre: "Afrobeats",
        src: "music/song12.mp3",
        cover: "images/album12.webp",
    },
    {
        title: "Heat Waves",
        artist: "Glass Animals",
        genre: "Indie Pop",
        src: "music/song13.mp3",
        cover: "images/album13.webp",
    },
    {
        title: "Love Yourself",
        artist: "Justin Bieber",
        genre: "Acoustic Pop",
        src: "music/song14.mp3",
        cover: "images/album14.webp",
    },
    {
        title: "'Cause You Have To",
        artist: "LANY",
        genre: "Alternative / Indie",
        src: "music/song15.mp3",
        cover: "images/album15.webp",
    },
    {
        title: "13",
        artist: "LANY",
        genre: "Indie Pop",
        src: "music/song16.mp3",
        cover: "images/album16.jpg",
    },
    {
        title: "Photograph",
        artist: "Ed Sheeran",
        genre: "Acoustic Pop",
        src: "music/song17.mp3",
        cover: "images/album17.webp",
    },
    {
        title: "Superpowers",
        artist: "Daniel Caesar",
        genre: "R&B / Soul",
        src: "music/song18.mp3",
        cover: "images/album18.jpg",
    },
    {
        title: "Who Knows",
        artist: "Daniel Caesar",
        genre: "R&B",
        src: "music/song19.mp3",
        cover: "images/album19.png",
    },
    {
        title: "Always",
        artist: "Daniel Caesar",
        genre: "Soul / R&B",
        src: "music/song20.mp3",
        cover: "images/album20.webp",
    }
];

const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumArt = document.getElementById("album-art");

const progressSlider = document.getElementById("progress-slider");
const volumeSlider = document.getElementById("volume-slider");

const recentList = document.getElementById("recent-list");

const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

const favoriteBtn = document.getElementById("favorite-btn");
const favoriteList = document.getElementById("favorite-list");

const playlistContainer = document.getElementById("playlist");

const genre = document.getElementById("genre");

const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");

let currentSong = 0;
let recentSongs = [];

let isShuffle = false;
let isRepeat = false;

let favoriteSongs =
    JSON.parse(localStorage.getItem("favorites")) || [];

// LOAD SONG
function loadSong(index) {

    document.querySelectorAll(".playlist-item, .recent-item, .favorite-item")
        .forEach(item => item.classList.remove("active-song"));

    currentSong = index;

    const song = songs[index];

    audioPlayer.src = song.src;

    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    genre.textContent = song.genre;

    albumArt.onerror = () => {
        albumArt.src = "images/default.jpg";
    };

    albumArt.src = song.cover;

    progressSlider.value = 0;

    addToRecent(song);

    updateFavoriteButton();
    renderFavorites();
    renderPlaylist();
}

// PLAY SONG
function playSong() {

    audioPlayer.play();

    playPauseBtn.innerHTML = "⏸";
}

// PAUSE SONG
function pauseSong() {

    audioPlayer.pause();

    playPauseBtn.innerHTML = "▶";
}

// PLAY / PAUSE
playPauseBtn.addEventListener("click", () => {

    audioPlayer.paused ? playSong() : pauseSong();
});

// NEXT SONG
function nextSong() {

    if (isShuffle) {

        let randomIndex;

        do {

            randomIndex = Math.floor(Math.random() * songs.length);

        } while (randomIndex === currentSong && songs.length > 1);

        currentSong = randomIndex;

    } else {

        currentSong = (currentSong + 1) % songs.length;
    }

    loadSong(currentSong);

    playSong();
}

// PREVIOUS SONG
function prevSong() {

    currentSong =
        (currentSong - 1 + songs.length) % songs.length;

    loadSong(currentSong);

    playSong();
}

nextBtn.addEventListener("click", nextSong);

prevBtn.addEventListener("click", prevSong);

// SHUFFLE
shuffleBtn.addEventListener("click", () => {

    isShuffle = !isShuffle;

    shuffleBtn.classList.toggle("active");
});

// REPEAT
repeatBtn.addEventListener("click", () => {

    isRepeat = !isRepeat;

    repeatBtn.classList.toggle("active");
});

// PROGRESS UPDATE
audioPlayer.addEventListener("timeupdate", () => {

    if (audioPlayer.duration) {

        const progress =
            (audioPlayer.currentTime / audioPlayer.duration) * 100;

        progressSlider.value = progress;
    }

    currentTimeEl.textContent =
        formatTime(audioPlayer.currentTime);
});

// SONG DURATION
audioPlayer.addEventListener("loadedmetadata", () => {

    durationEl.textContent =
        formatTime(audioPlayer.duration);
});

// SEEK
progressSlider.addEventListener("input", () => {

    audioPlayer.currentTime =
        (progressSlider.value / 100) * audioPlayer.duration;
});

// VOLUME
volumeSlider.addEventListener("input", () => {

    audioPlayer.volume = volumeSlider.value / 100;

    localStorage.setItem("volume", volumeSlider.value);
});

// LOAD SAVED VOLUME
window.addEventListener("load", () => {

    const savedVolume = localStorage.getItem("volume");

    if (savedVolume) {

        volumeSlider.value = savedVolume;

        audioPlayer.volume = savedVolume / 100;
    }
});

// AUTO NEXT
audioPlayer.addEventListener("ended", () => {

    if (isRepeat) {

        audioPlayer.currentTime = 0;

        audioPlayer.play();

        return;
    }

    nextSong();
});

// FORMAT TIME
function formatTime(time) {

    if (isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);

    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// RECENT SONGS
function addToRecent(song) {

    recentSongs = recentSongs.filter(s => s.title !== song.title);

    recentSongs.unshift(song);

    if (recentSongs.length > 5) {

        recentSongs.pop();
    }

    renderRecent();
}

function renderRecent() {

    recentList.innerHTML = "";

    recentSongs.forEach(song => {

        const div = document.createElement("div");

        div.classList.add("recent-item");

        if (songs.findIndex(s => s.title === song.title) === currentSong) {

            div.classList.add("active-song");
        }

        div.innerHTML = `
            <img src="${song.cover}">
            <div class="recent-text">
                <strong>${song.title}</strong>
                <span>${song.artist}</span>
            </div>
        `;

        div.addEventListener("click", () => {

            const index =
                songs.findIndex(s => s.title === song.title);

            loadSong(index);

            playSong();
        });

        recentList.appendChild(div);
    });
}

// FAVORITES
favoriteBtn.addEventListener("click", () => {

    const current = songs[currentSong];

    const exists =
        favoriteSongs.find(song => song.title === current.title);

    if (exists) {

        favoriteSongs =
            favoriteSongs.filter(song => song.title !== current.title);

    } else {

        favoriteSongs.push(current);
    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favoriteSongs)
    );

    updateFavoriteButton();

    renderFavorites();
});

function updateFavoriteButton() {

    const current = songs[currentSong];

    const isFavorite =
        favoriteSongs.find(song => song.title === current.title);

    if (isFavorite) {

        favoriteBtn.innerHTML =
            '<i class="fa-solid fa-heart"></i>';

        favoriteBtn.classList.add("active");

    } else {

        favoriteBtn.innerHTML =
            '<i class="fa-regular fa-heart"></i>';

        favoriteBtn.classList.remove("active");
    }
}

// KEYBOARD SHORTCUTS
document.addEventListener("keydown", (e) => {

    if (e.code === "Space") {

        e.preventDefault();

        audioPlayer.paused ? playSong() : pauseSong();
    }

    if (e.code === "ArrowRight") {

        nextSong();
    }

    if (e.code === "ArrowLeft") {

        prevSong();
    }
});

// FAVORITES RENDER
function renderFavorites() {

    favoriteList.innerHTML = "";

    favoriteSongs.forEach(song => {

        const div = document.createElement("div");

        div.classList.add("favorite-item");

        if (songs.findIndex(s => s.title === song.title) === currentSong) {

            div.classList.add("active-song");
        }

        div.innerHTML = `
            <img src="${song.cover}">
            <div class="recent-text">
                <strong>${song.title}</strong>
                <span>${song.artist}</span>
            </div>
        `;

        div.addEventListener("click", () => {

            const index =
                songs.findIndex(s => s.title === song.title);

            loadSong(index);

            playSong();
        });

        favoriteList.appendChild(div);
    });
}

// PLAYLIST
function renderPlaylist() {

    playlistContainer.innerHTML = "";

    songs.forEach((song, index) => {

        const div = document.createElement("div");

        div.classList.add("playlist-item");

        if (index === currentSong) {

            div.classList.add("active-song");
        }

        div.innerHTML = `
            <img src="${song.cover}">
            <div class="recent-text">
                <strong>${song.title}</strong>
                <span>${song.artist}</span>
            </div>
        `;

        div.addEventListener("click", () => {

            loadSong(index);

            playSong();
        });

        playlistContainer.appendChild(div);
    });
}

// AUDIO ERROR
audioPlayer.addEventListener("error", () => {

    alert("Audio file not found.");
});

// INIT
loadSong(currentSong);

renderFavorites();

renderPlaylist();
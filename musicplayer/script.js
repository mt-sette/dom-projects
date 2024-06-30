const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: 'T-Rex Roar',
        artist: 'Dinosaur',
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
        cover: './dino.jpg',
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'path/to/song2.mp3',
        cover: 'path/to/cover2.jpg',
    },
    // Add more songs here
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;
}

function playSong() {
    audio.play();
}

function pauseSong() {
    audio.pause();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

playButton.addEventListener('click', playSong);
pauseButton.addEventListener('click', pauseSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// Load the first song initially
loadSong(currentSongIndex);

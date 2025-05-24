import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css'
import '../styles/utils.css';

import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/utils.css';
import '../styles/components/music.css'
document.addEventListener('DOMContentLoaded', () => {
    // your entire existing JS code here

const viewer = document.getElementById('photo-viewer');
const viewerImg = document.getElementById('viewer-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let images = [];
let currentIndex = 0;

// Collect all images from all .gallery elements
document.querySelectorAll('.gallery').forEach(gallery => {
  gallery.querySelectorAll('img').forEach(img => {
    images.push(img);

    // Add click listener to each image
    img.addEventListener('click', () => {
      currentIndex = images.indexOf(img);
      openViewer(currentIndex);
    });
  });
});

function openViewer(index) {
  viewer.classList.remove('hidden');
  viewerImg.src = images[index].dataset.full || images[index].src;
  viewerImg.alt = images[index].alt || '';
}

// Close viewer
closeBtn.addEventListener('click', () => {
  viewer.classList.add('hidden');
});

// Navigate prev
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  openViewer(currentIndex);
});

// Navigate next
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  openViewer(currentIndex);
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    viewer.classList.add('hidden');
  }
});

console.log('Images found:', images.length);
images.forEach((img, i) => {
  console.log(i, img.src);
});
});

document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('music-player');
    const buttons = document.querySelectorAll('#playlist button');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const track = button.getAttribute('data-src');
        player.src = track;
        player.play();
      });
    });
  });

  const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const seekBar = document.getElementById('seek-bar');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

audio.addEventListener('timeupdate', () => {
  seekBar.value = (audio.currentTime / audio.duration) * 100;
});

seekBar.addEventListener('input', () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});
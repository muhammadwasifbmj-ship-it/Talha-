// 🎈 Balloons
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  const colors = ["#ff80ab", "#ffb6c1", "#ba68c8", "#f48fb1", "#e1bee7"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.animationDuration = (6 + Math.random() * 5) + "s";
  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}
setInterval(createBalloon, 600);

// ⏳ Countdown
const birthday = new Date("2025-10-01 00:00:00").getTime();
const timer = document.getElementById("countdown");
setInterval(() => {
  const now = new Date().getTime();
  const diff = birthday - now;

  if (diff <= 0) {
    timer.innerHTML = "🎂 It's Birthday Time! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}, 1000);

// 🎶 Music
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.textContent = "▶ Play Music";
  } else {
    bgMusic.play();
    musicBtn.textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
});


// 📸 Gallery Click to Zoom
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    const bigImg = document.createElement("img");
    bigImg.src = img.src;
    bigImg.style.maxWidth = "90%";
    bigImg.style.maxHeight = "90%";
    bigImg.style.borderRadius = "15px";

    overlay.appendChild(bigImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  });
});

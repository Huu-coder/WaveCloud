document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play-button");
    const playerButton = document.querySelector(".music-player .controls button:nth-child(2)");

    playButton.addEventListener("click", () => {
      togglePlayPause();
    });

    playerButton.addEventListener("click", () => {
      togglePlayPause();
    });

    function togglePlayPause() {
      if (playButton.textContent === "▶️") {
        playButton.textContent = "⏸️";
        playerButton.textContent = "⏸️";
      } else {
        playButton.textContent = "▶️";
        playerButton.textContent = "⏯️";
      }
    }
  });

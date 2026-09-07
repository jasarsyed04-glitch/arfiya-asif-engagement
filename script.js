document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("openInvitation");

  // 🎵 Start engagement music
  const playEngagementMusic = () => {
    const player = document.getElementById("youtube-player");

    if (player) {
      player.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "playVideo",
          args: []
        }),
        "*"
      );
    }
  };

  if (envelope && openButton) {
    const open = () => {

      // 🎵 Start Jashn-E-Bahaaraa
      playEngagementMusic();

      // 💌 Open envelope
      envelope.classList.add("open");
      openButton.textContent = "Opening your invitation…";

      setTimeout(() => {
        window.location.href = "invitation.html";
      }, 3000);
    };

    envelope.addEventListener("click", open);
    openButton.addEventListener("click", open);
  }

  const shareBtn = document.getElementById("shareBtn");

  if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
      const shareData = {
        title: "Arfiya & Asif Ali — Engagement Invitation",
        text: "You are invited to celebrate the engagement ceremony of Arfiya & Asif Ali on 13 September 2026 at 10:00 AM in Kallur, Khammam, Telangana.",
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          shareBtn.textContent = "Link Copied ✓";
          setTimeout(() => shareBtn.textContent = "Share Invitation", 2200);
        }
      } catch (e) {
        // User cancelled sharing; no action needed.
      }
    });
  }

  const countdown = document.getElementById("countdown");

  if (countdown) {
    // Event date: 13 September 2026, 10:00 AM IST.
    const eventDate = new Date("2026-09-13T10:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      let diff = eventDate - now;

      if (diff < 0) diff = 0;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      document.getElementById("days").textContent =
        String(d).padStart(2, "0");

      document.getElementById("hours").textContent =
        String(h).padStart(2, "0");

      document.getElementById("minutes").textContent =
        String(m).padStart(2, "0");

      document.getElementById("seconds").textContent =
        String(s).padStart(2, "0");
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});

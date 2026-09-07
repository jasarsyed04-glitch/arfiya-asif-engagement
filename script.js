document.addEventListener("DOMContentLoaded", () => {

  /*
   * =====================================================
   * 💌 OPEN INVITATION
   * =====================================================
   */

  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("openInvitation");

  if (envelope && openButton) {

    let alreadyOpening = false;

    const openInvitation = () => {

      if (alreadyOpening) {
        return;
      }

      alreadyOpening = true;

      envelope.classList.add("open");

      openButton.textContent =
        "Opening your invitation… ✨";

      /*
       * Give the envelope animation time to finish
       * before opening the invitation page.
       */

      setTimeout(() => {

        window.location.href = "invitation.html";

      }, 1200);

    };


    envelope.addEventListener(
      "click",
      openInvitation
    );


    openButton.addEventListener(
      "click",
      openInvitation
    );

  }


  /*
   * =====================================================
   * 🎵 YOUTUBE MUSIC
   * =====================================================
   */

  const musicButton =
    document.getElementById("musicButton");

  const musicStatus =
    document.getElementById("musicStatus");

  const youtubePlayer =
    document.getElementById("youtube-player");


  let musicPlaying = false;


  const playMusic = () => {

    if (!youtubePlayer) {
      return;
    }


    youtubePlayer.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "playVideo",
        args: []
      }),
      "*"
    );


    musicPlaying = true;


    if (musicButton) {

      musicButton.textContent =
        "⏸ Pause Our Song";

    }


    if (musicStatus) {

      musicStatus.textContent =
        "🎵 Jashn-E-Bahaaraa is playing ♡";

    }

  };


  const pauseMusic = () => {

    if (!youtubePlayer) {
      return;
    }


    youtubePlayer.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: []
      }),
      "*"
    );


    musicPlaying = false;


    if (musicButton) {

      musicButton.textContent =
        "🎵 Play Our Song";

    }


    if (musicStatus) {

      musicStatus.textContent =
        "Tap to continue the music ♡";

    }

  };


  if (musicButton) {

    musicButton.addEventListener(
      "click",
      () => {

        if (musicPlaying) {

          pauseMusic();

        } else {

          playMusic();

        }

      }
    );

  }


  /*
   * =====================================================
   * 📤 SHARE INVITATION
   * =====================================================
   */

  const shareBtn =
    document.getElementById("shareBtn");


  if (shareBtn) {

    shareBtn.addEventListener(
      "click",
      async () => {

        const shareData = {

          title:
            "Arfiya & Asif Ali — Engagement Invitation",

          text:
            "You are invited to celebrate the engagement ceremony of Arfiya & Asif Ali on 13 September 2026 at 10:00 AM in Kallur, Khammam, Telangana.",

          url:
            window.location.href

        };


        try {

          if (navigator.share) {

            await navigator.share(
              shareData
            );

          } else {

            await navigator.clipboard.writeText(
              window.location.href
            );


            shareBtn.textContent =
              "Link Copied ✓";


            setTimeout(() => {

              shareBtn.textContent =
                "Share Invitation";

            }, 2200);

          }

        } catch (error) {

          /*
           * User cancelled sharing.
           * No action needed.
           */

        }

      }
    );

  }


  /*
   * =====================================================
   * ⏳ COUNTDOWN
   * =====================================================
   */

  const countdown =
    document.getElementById("countdown");


  if (countdown) {

    /*
     * Event:
     * 13 September 2026
     * 10:00 AM
     * India Standard Time (+05:30)
     */

    const eventDate =
      new Date(
        "2026-09-13T10:00:00+05:30"
      ).getTime();


    const updateCountdown = () => {

      const now =
        Date.now();


      let difference =
        eventDate - now;


      if (difference < 0) {

        difference = 0;

      }


      const days =
        Math.floor(
          difference /
          (1000 * 60 * 60 * 24)
        );


      const hours =
        Math.floor(
          (difference /
            (1000 * 60 * 60)) % 24
        );


      const minutes =
        Math.floor(
          (difference /
            (1000 * 60)) % 60
        );


      const seconds =
        Math.floor(
          (difference /
            1000) % 60
        );


      const daysElement =
        document.getElementById("days");


      const hoursElement =
        document.getElementById("hours");


      const minutesElement =
        document.getElementById("minutes");


      const secondsElement =
        document.getElementById("seconds");


      if (daysElement) {

        daysElement.textContent =
          String(days).padStart(2, "0");

      }


      if (hoursElement) {

        hoursElement.textContent =
          String(hours).padStart(2, "0");

      }


      if (minutesElement) {

        minutesElement.textContent =
          String(minutes).padStart(2, "0");

      }


      if (secondsElement) {

        secondsElement.textContent =
          String(seconds).padStart(2, "0");

      }

    };


    updateCountdown();


    setInterval(
      updateCountdown,
      1000
    );

  }

});

// Birthday page scripts

// Animation GSAP timeline on load event
window.addEventListener("load", () => {
  Swal.fire({
    title: "Udah siap?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  // split chars that needs  to be animted individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewY: "-15deg",
  };

  // animation timeline
  const tl = new TimelineMax();

  tl.to(".container", 0.6, {
    visibility: "visible",
  })
    .from(".one", 0.5, { // Durasi diperpanjang
      opacity: 0,
      y: 10,
    })
    .from(".two", 1.2, { // Durasi diperpanjang
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.5, // Durasi diperpanjang
      {
        opacity: 0,
        y: 10,
      },
      "+=3.5"
    )
    .to(
      ".two",
      2.5, // Durasi diperpanjang
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 1.5, { // Durasi diperpanjang
      opacity: 0,
      y: 10,
    })
    .to(
      ".three",
      1.5, // Durasi diperpanjang
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 1.2, { // Durasi diperpanjang
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.8, { // Durasi diperpanjang
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      2, // Durasi diperpanjang
      {
        visibility: "visible",
      },
      0.1 // Jarak antar elemen juga diperpanjang
    )
    .to(
      ".fake-btn",
      0.5, { // Durasi diperpanjang
        backgroundColor: "rgb(127, 206, 248)",
      },
      "+=4"
    )
    .to(
      ".four",
      1, // Durasi diperpanjang
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1"
    )
    .from(".idea-1", 1.5, ideaTextTrans) // Durasi diperpanjang
    .to(".idea-1", 1.5, ideaTextTransLeave, "+=2.5") // Durasi diperpanjang
    .from(".idea-2", 1.5, ideaTextTrans) // Durasi diperpanjang
    .to(".idea-2", 1.5, ideaTextTransLeave, "+=2.5") // Durasi diperpanjang
    .from(".idea-3", 1.5, ideaTextTrans) // Durasi diperpanjang
    .to(".idea-3 strong", 0.8, { // Durasi diperpanjang
      scale: 1.1,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 1.5, ideaTextTransLeave, "+=2.5") // Durasi diperpanjang
    .from(".idea-4", 0.5, ideaTextTrans) // Durasi diperpanjang
    .to(".idea-4", 0.5, ideaTextTransLeave, "+=2.5") // Durasi diperpanjang
    .from(
      ".idea-5",
      1.5, // Durasi diperpanjang
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=1.5"
    )
    .to(
      ".idea-5 span",
      1, // Durasi diperpanjang
      {
        rotation: 90,
        x: 8,
      },
      "+=1.4"
    )
    .to(
      ".idea-5",
      1.5, // Durasi diperpanjang
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      1.5, // Durasi diperpanjang
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.3 // Jarak antar elemen juga diperpanjang
    )
    .staggerTo(
      ".idea-6 span",
      1.5, // Durasi diperpanjang
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.3,
      "+=1.5"
    )
    .staggerFromTo(
      ".ballons img",
      3.5, // Durasi diperpanjang
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.3 // Jarak antar elemen juga diperpanjang
    )
    .from(
      ".profile-picture",
      1.5, // Durasi diperpanjang
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 1.5, { // Durasi diperpanjang
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      1.5, // Durasi diperpanjang
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.2 // Jarak antar elemen juga diperpanjang
    )
    .staggerFromTo(
      ".wish-hbd span",
      1.5, // Durasi diperpanjang
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.2,
      "party"
    )
    .from(
      ".wish h5",
      1, // Durasi diperpanjang
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      2.5, // Durasi diperpanjang
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 2, // Jarak antar pengulangan diperpanjang
      },
      0.5
    )
    .to(".six", 0.8, { // Durasi diperpanjang
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1.5, ideaTextTrans, 1.5) // Durasi diperpanjang
    .to(
      ".last-smile",
      1, // Durasi diperpanjang
      {
        rotation: 90,
      },
      "+=1"
    );

  // restart animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

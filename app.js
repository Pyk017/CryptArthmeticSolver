// tsParticles
//   .load("tsparticles", {
//     background: {
//       color: {
//         value: "#000"
//       }
//     },
//     fpsLimit: 120,
//     particles: {
//       number: {
//         value: 100,
//         density: {
//           enable: false,
//           value_area: 800
//         }
//       },
//       color: {
//         value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
//       },
//       shape: {
//         type: "circle"
//       },
//       opacity: {
//         value: 1
//       },
//       size: {
//         value: 32,
//         random: {
//           enable: true,
//           minimumValue: 16
//         }
//       },
//       line_linked: {
//         enable: false,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 1,
//         direction: "none",
//         random: false,
//         straight: false,
//         outMode: "out",
//         bounce: false,
//         warp: false,
//         noise: {
//           enable: true,
//           delay: {
//             value: 0.1
//           }
//         }
//       }
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onHover: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       }
//     },
//     detectRetina: true,
//     pauseOnBlur: true
//   })
//   .then((container) => {
//     container.setNoise({
//       init: function () {},
//       update: function () {},
//       generate: function (p) {
//         if (!p.noiseAngle) {
//           p.noiseAngle = 0;
//         } else if (p.noiseAngle >= Math.PI * 2) {
//           p.noiseAngle -= Math.PI * 2;
//         }

//         const pos = p.getPosition();

//         p.noiseAngle += Math.PI * 2 * Math.random();

//         return {
//           angle: p.noiseAngle,
//           length: Math.random() * 2 - 1
//         };
//       }
//     });

//     container.refresh();
//   });

tsParticles.load("tsparticles", {
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onDiv: {
        elementId: "repulse-div",
        enable: false,
        mode: "repulse"
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 40,
        speed: 3
      },
      connect: {
        distance: 80,
        lineLinked: {
          opacity: 0.5
        },
        radius: 60
      },
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    lineLinked: {
      blink: false,
      color: "#000",
      consent: false,
      distance: 150,
      enable: true,
      opacity: 0,
      width: 0
    },
    rotate: {
      value: 0,
      random: true,
      direction: "clockwise",
      animation: {
        enable: true,
        speed: 5,
        sync: false
      }
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      limit: 0,
      value: 80
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 1,
        sync: false
      },
      random: false,
      value: 0.8
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400"
      },
      image: [
        {
          src: "images/img0.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img1.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img2.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img3.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img4.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img5.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img6.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img7.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img8.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img9.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img10.png",
          width: 32,
          height: 32
        },
        {
          src: "images/img11.png",
          width: 32,
          height: 32
        },
      ],
      polygon: {
        nb_sides: 5
      },
      stroke: {
        color: "#000000",
        width: 0
      },
      type: "image"
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: false,
      value: 16
    }
  },
  polygon: {
    draw: {
      enable: false,
      lineColor: "#ffffff",
      lineWidth: 0.5
    },
    move: {
      radius: 10
    },
    scale: 1,
    type: "none",
    url: ""
  }
});


 /* Inicialização do particles.js com interação ao mover o mouse */
 particlesJS("particles-js", {
    "particles": {
      "number": { "value": 60 },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.5 },
      "size": { "value": 3 },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "grab": { "distance": 200, "line_linked": { "opacity": 0.8 } },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });
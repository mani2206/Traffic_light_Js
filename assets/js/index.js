const lights = document.querySelectorAll('.light');

let currentIndex = 0;

function LightChange() {
  // Remove 'active' class from all lights
  lights.forEach(light => light.classList.remove('active'));

  // Add 'active' class to the current light
  lights[currentIndex].classList.add('active');

  // Move to the next light (loop back to the first light if at the end)
  currentIndex = (currentIndex + 1) % lights.length;
}

// Initially set the first light to active
lights[currentIndex].classList.add('active');

// Change lights every second
setInterval(LightChange, 1000);

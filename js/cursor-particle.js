// Cursor particle effect
let mouseX = 0;
let mouseY = 0;
let particleCount = 0;
const maxParticles = 50;
const particleColors = ['', 'blue', 'purple', 'pink'];

// Track mouse position
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Create particle at mouse position
  createParticle(mouseX, mouseY);
});

function createParticle(x, y) {
  // Limit the number of particles
  if (particleCount >= maxParticles) {
    return;
  }

  particleCount++;

  const particle = document.createElement('div');
  particle.className = 'cursor-particle';

  // Random color variation
  const randomColor = particleColors[Math.floor(Math.random() * particleColors.length)];
  if (randomColor) {
    particle.classList.add(randomColor);
  }

  // Random offset for more organic feel
  const offsetX = (Math.random() - 0.5) * 20;
  const offsetY = (Math.random() - 0.5) * 20;

  particle.style.left = `${x + offsetX}px`;
  particle.style.top = `${y + offsetY}px`;

  document.body.appendChild(particle);

  // Remove particle after animation ends
  setTimeout(() => {
    particle.remove();
    particleCount--;
  }, 800);
}

// Throttle particle creation for better performance
let lastParticleTime = 0;
const particleInterval = 50; // Create particle every 50ms

document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastParticleTime > particleInterval) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    createParticle(mouseX, mouseY);
    lastParticleTime = now;
  }
});

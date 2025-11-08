// Create snowflakes
function createSnowflakes() {
  const snowflakeCount = 50;
  const snowflakeChars = ['❅', '❆', '❄'];

  for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];

    // Random starting position
    const startX = Math.random() * window.innerWidth;
    snowflake.style.left = `${startX}px`;

    // Random horizontal drift
    const xEnd = (Math.random() - 0.5) * 100;
    snowflake.style.setProperty('--x-end', `${xEnd}px`);

    // Random delay
    snowflake.style.animationDelay = `${Math.random() * 10}s`;

    document.body.appendChild(snowflake);
  }
}

// Initialize snowflakes when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createSnowflakes);
} else {
  createSnowflakes();
}

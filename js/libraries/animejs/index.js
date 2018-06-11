window.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.one-object .object',
    translateX: [
      { value: 100, duration: 1200 },
      { value: 0, duration: 3000 },
      { value: 30, duration: 2000 }
    ],
    rotate: 80,
    loop: true
  })
});
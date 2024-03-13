export function startParticleAnimation(e) {
  // Szybka kontrola, czy użytkownik kliknął przycisk za pomocą klawiatury
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = document.querySelector('#button').getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 60; i++) {
      // Wywołujemy funkcję createParticle 30 razy
      // Przekazujemy współrzędne przycisku jako wartości x i y
      createParticle(x, y);
    }
  } else {
    for (let i = 0; i < 60; i++) {
      // Wywołujemy funkcję createParticle 30 razy
      // Ponieważ potrzebujemy współrzędnych myszy, przekazujemy je jako argumenty
      createParticle(e.clientX, e.clientY);
    }
  }
}

function createParticle(x, y) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);

  // Oblicz losowy rozmiar od 5px do 25px
  const size = Math.floor(Math.random() * 20 + 5);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  // Generujemy losowy kolor w palecie pomarańczowo-białej
  particle.style.background = `hsl(${Math.random() * 30 + 15}, 100%, ${Math.random() * 50 + 50}%)`;
  // Generujemy losowe docelowe współrzędne x i y w odległości 75px od myszy
  const destinationX = x + (Math.random() - 0.5) * 2 * 75;
  const destinationY = y + (Math.random() - 0.5) * 2 * 75;

  // Przechowujemy animację w zmiennej, ponieważ będziemy jej potrzebować później
  const animation = particle.animate(
    [
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
        opacity: 1,
      },
      {
        // Definiujemy końcowe współrzędne jako drugi klucz animacji
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      // Ustaw losowy czas trwania od 500 do 1500ms
      duration: Math.random() * 1000 + 500,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: Math.random() * 200,
    },
  );

  animation.onfinish = () => {
    particle.remove();
  };
}

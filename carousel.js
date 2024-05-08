const carouselContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
const viewportWidth = window.innerWidth;

// Calculate margin width for the edges
const marginPercentage = 0.3;
const marginWidth = viewportWidth * marginPercentage;

let startX;
let currentX = 0;
let isDragging = false;

// Store initial card positions
const initialCardPositions = Array.from(cards).map((card, index) => index * cardWidth);

carouselContainer.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  carouselContainer.style.transition = 'none'; // Disable transition during drag
});

carouselContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const diffX = startX - touchX;
  currentX += diffX; // Add instead of subtracting
  handleCarousel();
  startX = touchX;
});


carouselContainer.addEventListener('touchend', () => {
  isDragging = false;
  snapToNearestCard();
});

function handleCarousel() {
  cards.forEach((card, index) => {
    const cardPosition = index * cardWidth;
    const newPosition = cardPosition - currentX;
    const isVisible = newPosition + cardWidth > 0 && newPosition < viewportWidth;
    card.style.transform = isVisible ? `translateX(${newPosition}px)` : 'translateX(-9999px)';
  });
}

function snapToNearestCard() {
  const middleX = viewportWidth / 2;
  const cardIndex = Math.round((currentX + middleX - marginWidth) / cardWidth);
  const targetX = cardIndex * cardWidth - middleX + marginWidth;
  currentX = targetX;
  carouselContainer.style.transition = 'transform 1.5s ease'; // Enable transition
  handleCarousel();
}



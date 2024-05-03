const cardContainer = document.querySelector('.card-container');
let cards = Array.from(cardContainer.children);
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0; // Start at the first card
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= cards.length) {
      currentIndex = 0; // Reset to the first card
      cardContainer.style.transition = 'none';
      cardContainer.style.transform = `translateX(0)`;
      setTimeout(() => {
        cardContainer.style.transition = 'transform 0.5s ease-in-out';
        cardContainer.style.transform = `translateX(-${cardWidth}px)`; // Move to the second card
        currentIndex = 1; // Update currentIndex to second card
      }, 50); // Small delay to ensure transition reset completes before starting the new one
    } else {
      cardContainer.style.transition = 'transform 0.5s ease-in-out';
      cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  }, 5000); // Change card every 5 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  // Clone the first and last cards to make the carousel infinite
  const firstCardClone = cards[0].cloneNode(true);
  const lastCardClone = cards[cards.length - 1].cloneNode(true);
  cardContainer.insertBefore(lastCardClone, cardContainer.firstChild);
  cardContainer.appendChild(firstCardClone);
  
  cards = Array.from(cardContainer.children);
  cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  startCarousel();
});

function handleTransitionEnd() {
  if (currentIndex >= cards.length - 1) {
    currentIndex = 1; // Reset to the first "real" card
    cardContainer.style.transition = 'none';
    cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

cardContainer.addEventListener('transitionend', handleTransitionEnd);
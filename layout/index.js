function expand(card) {
  const overlay = document.getElementById('overlay');
  card.classList.add('active');
  overlay.classList.add('active');
}

function closeAllCards() {
  const activeCard = document.querySelector('.sobre-card.active');
  const overlay = document.getElementById('overlay');
  
  if (activeCard) activeCard.classList.remove('active');
  overlay.classList.remove('active');
}
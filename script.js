const greetings = [
    "Welcome to Chocoa Moka",
    "Your Sweet Escape",
    "Delicious Sweets Await",
    "Taste the Best Pastries"
];

let currentIndex = 0;
const greetingElement = document.getElementById('dynamicGreeting');

function updateGreeting() {
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentIndex];
}

setInterval(updateGreeting, 4000);

// ****************************************************************************


const specialOffers = [
    { image: './images/23.jpg', name: 'Special Offer', price: '$15.00' },
    { image: './images/25.jpg', name: 'Special Offer', price: '$20.00' },
    { image: './images/offer4.jpg', name: 'Special Offer', price: '$18.00' },
    { image: './images/offer2.jpg', name: 'Special Offer', price: '$22.00' },
    { image: './images/free-photo-of-cake-with-fruit(1).jpeg', name: 'Special Offer', price: '$25.00' },
    { image: './images/about2.jpg', name: 'Special Offer', price: '$19.00' },
    { image: './images/08.jpeg', name: 'Special Offer', price: '$19.00' },
    { image: './images/25.jpg', name: 'Special Offer', price: '$19.00' }
  ];
  
  const offersContainer = document.getElementById('offers-container');
  let groupCount = 0;
  
  for (let i = 0; i < specialOffers.length; i += 4) {
    const carouselItem = document.createElement('div');
    carouselItem.className = `carousel-item ${groupCount === 0 ? 'active' : ''}`;
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row rowoffer';
  
    for (let j = i; j < i + 4 && j < specialOffers.length; j++) {
      const offer = specialOffers[j];
      const offerCard = document.createElement('div');
      offerCard.className = 'col-12 col-md-4 col-lg-3';
      offerCard.innerHTML = `
        <div class="card mb-4 cardoffer">
          <img src="${offer.image}" class="card-img-top" alt="${offer.name}">
          <i class="fa-solid fa-certificate" style="color: #ffc800;"></i>
          <div class="card-body">
            <h5 class="card-title">${offer.name}</h5>
            <p class="card-text priceoffer">${offer.price}</p>
          </div>
        </div>
      `;
      rowDiv.appendChild(offerCard);
    }
  
    carouselItem.appendChild(rowDiv);
    offersContainer.appendChild(carouselItem);
    groupCount++;
  }
//   


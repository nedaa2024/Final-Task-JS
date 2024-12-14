const menuItems = {
    mainCourse: [
      {
        title: "Hot Choco",
        text: "Rich and creamy chocolate cake",
        price: "$8",
        image: "./images/03.jpeg"
      },
      {
        title: "Pan Cake",
        text: "Rich and creamy chocolate cake",
        price: "$5",
        image: "./images/20.jpg"
      },
      {
        title: "Milk Cake",
        text: "Rich and creamy chocolate cake",
        price: "$2",
        image: "./images/3.jpeg"
      },
      {
        title: "Cream Cake",
        text: "Rich and creamy chocolate cake",
        price: "$7",
        image: "./images/4.jpeg"
      },
      {
        title: "Choco Cake",
        text: "Rich and creamy chocolate cake",
        price: "$8",
        image: "./images/5.jpeg"
      },
      {
        title: "Choco Moka",
        text: "Rich and creamy chocolate cake",
        price: "$20",
        image: "./images/6.jpeg"
      },
      {
        title: "Hot chco",
        text: "Rich and creamy chocolate cake",
        price: "$8",
        image: "./images/7.jpg"
      },
      {
        title: "Choco So",
        text: "Rich and creamy chocolate cake",
        price: "$8",
        image: "./images/9.jpg"
      }
     ,  {
        title: "Choco Lamo",
        text: "Rich and creamy chocolate cake",
        price: "$12",
        image: "./images/004.jpeg"
      }
    ],
  
    
  };
  
  function filterMenu(category) {
    const container = document.getElementById('menu-items');
    container.innerHTML = '';
    menuItems[category].forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-lg-4 col-md-6 col-sm-6 col-6 mb-4';
      card.innerHTML = `
        <div class="card menu-card">
          <img src="${item.image}" class="card-img-top img-fluid meal-image" alt="${item.title}">
          <div class="card-body menubody">
            <div class="title-price">
              <h6 class="card-title">${item.title}</h6>
              <span class="separator"> - </span>
              <p class="price">${item.price}</p>
            </div>
            <p class="card-text dis">${item.text}</p>
            <button class="buy" onclick="changeImage(this)">Buy Now</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  
  function changeImage(button) {
    const card = button.closest('.card');
    const img = card.querySelector('.meal-image');
    img.src = 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=';
  }
  
  document.addEventListener('DOMContentLoaded', () => filterMenu('mainCourse'));
  
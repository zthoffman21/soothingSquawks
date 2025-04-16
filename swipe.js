class Bird {
    constructor(imagePath, name, age, description) {
      this.imagePath = imagePath;
      this.name = name;
      this.age = age;
      this.description = description;
    }
  
    // Return only the inner HTML content (without a wrapping container)
    renderContent() {
      return `
        <div class="bird-image">
          <img src="${this.imagePath}" alt="${this.name}" />
        </div>
        <div class="bird-details">
          <div class="bird-main-info">
            <h3 class="bird-name">${this.name}</h3>
            <h4 class="bird-age">${this.age}</h4>
          </div>
          <p>${this.description}</p>
        </div>
      `;
    }
  }
  
  // Example bird objects
  const john = new Bird(
    'images/parrot1.jpg',
    'John',
    '2 Year Old Macaw',
    "John is a vibrant and curious 2-year-old macaw with a dazzling array of colorful feathers. Always full of energy, he loves to explore his surroundings and play with his favorite toys. With a mischievous twinkle in his eye, John enjoys mimicking sounds and engaging with anyone who comes near. His playful spirit makes him a cherished companion."
  );
  const bert = new Bird(
    'images/parrot2.webp',
    'Bert',
    '4 Year Old Cockatoo',
    "Bert is an intelligent, playful cockatoo with a distinctive, jaunty crest. He’s curious and affectionate, always eager to interact and brighten up any room with his vibrant personality. His mischievous charm and expressive eyes make him a truly unforgettable companion."
  );
  
  // Suppose you have more birds in your array:
  const birds = [john, bert];
  let currentBird = 0;
  
  // Get references to elements
  const birdCard = document.getElementById("bird-box");
  const leftArrow = document.getElementById("noButton");
  const rightArrow = document.getElementById("yesButton");
  
  // Function to update the card content to the next bird
  function updateBirdCard() {
    // Increase currentBird (or change based on left/right swipe logic)
    currentBird = (currentBird + 1) % birds.length;
    birdCard.innerHTML = birds[currentBird].renderContent();
  }
  
  // Add click listeners for swiping left
  leftArrow.addEventListener("click", () => {
    birdCard.classList.add("swipe-left");
    setTimeout(() => {
        updateBirdCard();
    
        birdCard.style.transition = "none";
        birdCard.classList.remove("swipe-left");
        void birdCard.offsetHeight;
        birdCard.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
      }, 500); // Duration of your swipe animation
  });
  
  // Add click listeners for swiping right
  rightArrow.addEventListener("click", () => {
    birdCard.classList.add("swipe-right");
    setTimeout(() => {
        updateBirdCard();
    
        birdCard.style.transition = "none";
        birdCard.classList.remove("swipe-right");
        void birdCard.offsetHeight;
        birdCard.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
      }, 500); // Duration of your swipe animation
  });
  
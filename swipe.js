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

function match(bird) {
    matchScreen.innerHTML = `
                  <div class="match-card">
                    <div style="display: flex; align-items:center; justify-content: center;">
                        <img
                            class="match-icon"
                            src="images/phillip_schall_web.jpg"
                            alt="Profile Img"
                        />
                        <img
                        class="match-icon"
                        src="images/heart.png"
                        alt="Heart"
                        style="width: 50px; height: 50px;"
                    />
                    <img
                    class="match-icon"
                    src="${bird.imagePath}"
                    alt="bird"
                />
                    </div>
                    <h1>It's a match!</h1>
                    <p>You and <strong>${bird.name}</strong> would make a great pair!</p>
                    <a id="keep-swiping-button" class="btn btn-secondary">Keep Swiping</a>
                    <a href="profile.html" class="btn btn-primary">View Profile</a>
                </div>
                `;

    const keepBtn = document.getElementById("keep-swiping-button");
    keepBtn.addEventListener("click", () => {
        matchScreen.style.opacity = 0;
    });
}

function updateQueue() {
	if (matchQueue[0] != null) {
		match(matchQueue[0]);
		matchScreen.style.opacity = 1;
	}
	matchQueue.shift();
}

// Example bird objects
const john = new Bird(
    "images/parrot1.jpg",
    "John",
    "2 Year Old Macaw",
    "John is a vibrant and curious 2-year-old macaw with a dazzling array of colorful feathers. Always full of energy, he loves to explore his surroundings and play with his favorite toys. With a mischievous twinkle in his eye, John enjoys mimicking sounds and engaging with anyone who comes near. His playful spirit makes him a cherished companion."
);
const bert = new Bird(
    "images/parrot2.webp",
    "Bert",
    "4 Year Old Cockatoo",
    "Bert is an intelligent, playful cockatoo with a distinctive, jaunty crest. He’s curious and affectionate, always eager to interact and brighten up any room with his vibrant personality. His mischievous charm and expressive eyes make him a truly unforgettable companion."
);
const jeff = new Bird(
    "images/parrot3.jpg",
    "Jeff",
    "1 Year Old Parakeet",
    "Jeff is a spirited one-year-old parakeet who greets each morning with a cheerful melody. He’s endlessly inquisitive—always exploring new toys and learning little tricks, from stepping up on a finger to softly mimicking simple words. Jeff thrives on social time, enjoying gentle conversations and play sessions with anyone who stops by. His playful curiosity and affectionate nature make him a wonderful companion."
);
const bob = new Bird(
    "images/parrot4.jfif",
    "Bob",
    "7 Year Old Cockatoo",
    "Bob is a clever seven-year-old cockatoo with a knack for brightening everyone’s day. He’s an expert whistler, effortlessly picking up new tunes and greeting visitors with his signature “hello” in a surprisingly human voice. Bob thrives on mental challenges—he loves puzzle toys and happily practices mastering simple tricks like ringing a bell or fetching small objects. With his gentle demeanor and playful spirit, Bob makes every moment feel a little more joyful."
);
const tom = new Bird(
    "images/parrot5.jfif",
    "Tom",
    "3 Year Old Parakeet",
    "Tom is a curious three-year-old parakeet who fills the room with lively chirps each day. He's fascinated by games that challenge his tiny mind—whether it's unlocking a simple puzzle or navigating a mirror maze. Tom thrives on interaction, enjoying gentle chatter and responding to his name with eager whistles. His playful intelligence and friendly nature make every moment spent with him a delight."
);
const fred = new Bird(
    "images/parrot6.avif",
    "Fred",
    "3 Year Old Macaw",
    "Fred is a bright-spirited three-year-old macaw who truly comes alive when interacting with you. He loves mastering new words and phrases, often surprising everyone with an impromptu “hello!” or whistle. Fred thrives on mental stimulation—he eagerly tackles puzzle toys and enjoys learning simple tricks like ringing a bell or tossing a small toy back on cue. Always ready for a chat or a playful game, his outgoing personality and affectionate charm make him an unforgettable companion."
);

const birds = [john, bert, jeff, bob, tom, fred];
var matchQueue = [null, null];
let currentBird = 0;

// Get references to elements
const birdCard = document.getElementById("bird-box");
const leftArrow = document.getElementById("noButton");
const rightArrow = document.getElementById("yesButton");
const matchScreen = document.getElementById("match-screen");

// Function to update the card content to the next bird
function updateBirdCard() {
    // Increase currentBird (or change based on left/right swipe logic)
    currentBird = (currentBird + 1) % birds.length;
    birdCard.innerHTML = birds[currentBird].renderContent();
}

// Add click listeners for swiping left
leftArrow.addEventListener("click", () => {
    birdCard.classList.add("swipe-left");
	matchQueue.push(null);
	updateQueue();
	
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
	matchQueue.push(birds[currentBird]);
	updateQueue();
	
    setTimeout(() => {
        updateBirdCard();

        birdCard.style.transition = "none";
        birdCard.classList.remove("swipe-right");
        void birdCard.offsetHeight;
        birdCard.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    }, 500); // Duration of your swipe animation
});
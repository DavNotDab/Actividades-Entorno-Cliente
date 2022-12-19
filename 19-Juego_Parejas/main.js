
const game_area = document.getElementById("game-area");
let imagesID = [];
let cards = [];
let flippedCards = [];

// Starts the game or reset it if it's already started
function startGame() {
    game_area.innerHTML = "";
    let difficulty = document.getElementById("level").value;
    imagesID = shuffleArray(buildArray(difficulty));
    cards = createCards(imagesID.length, difficulty);
}

// Build an array of image IDs based on the game's difficulty
function buildArray(difficulty) {
    let cards = [];
    for (let i = 1; i < difficulty*6+1; i++) {
        cards.push(i);
        cards.push(i);
    }
    return cards;
}

// Creates the game cards
function createCards(longitud, difficulty) {
    let cards = [];
    for (let i = 0; i < longitud; i++) {
        // Creates the diferent elements of the card
        let card = document.createElement("div");
        let cardButton = document.createElement("button");
        let cardImage = document.createElement("img");
        let imgID = imagesID.pop();

        // Adds the classes to the elements
        card.className = "card";
        cardButton.className = "card-button";
        cardImage.className = "card-image";

        // Display the cards according to the difficulty
        let columns = 2 + parseInt(difficulty)*2;
        if (columns == 8) columns = 9;
        game_area.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";

        // Adds a bit of styling to the cards and their elements
        let size = (difficulty == 1) ? "200px" : (difficulty == 2) ? "150px" : "120px";
        cardImage.style.width = size;
        cardImage.style.height = size;
        cardImage.src = "img/0.jpg";
        cardButton.style.backgroundImage = "url('img/" + imgID + ".jpg')";
        cardButton.style.backgroundSize = "cover";
        cardButton.addEventListener("click", ()=> {
            flipCard(cardButton);
        });

        // Adds the elements to their parents
        cardButton.appendChild(cardImage);
        card.appendChild(cardButton);
        game_area.appendChild(card);
        cards.push(card);
    }

    // Returns the cards
    return cards;
}

// Flips the card
// Shuffles and returns an array in a random order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Flips the card
function flipCard(card) {
    card.classList.toggle("flipped");
    card.setAttribute("disabled", "disabled");
    flippedCards.push(card);
    checkPairs();
}

function checkPairs() {
    if (flippedCards.length % 2 == 0) {
        let ultimo = flippedCards.length - 1,
            penultimo = flippedCards.length - 2;
        if (flippedCards[penultimo].style.backgroundImage === flippedCards[ultimo].style.backgroundImage) {
            flippedCards[penultimo] && flippedCards[ultimo].removeEventListener("click", ()=> {
                flipCard(getImageID(flippedCards[penultimo]));
            });
        } else {
            setTimeout(() => {
                flippedCards[penultimo].classList.remove("flipped");
                flippedCards[ultimo].classList.remove("flipped");
                flippedCards[penultimo].removeAttribute("disabled");
                flippedCards[ultimo].removeAttribute("disabled");
                flippedCards.pop();
                flippedCards.pop();
            }, 500);
        }
    }
    if (flippedCards.length == cards.length) {

        setTimeout(() => {
            alert("You win!");
        }, 500);
    }
}

// Returns the card's image ID
function getImageID(card) {
    return card.style.backgroundImage.split("/")[1].split(".")[0];
}


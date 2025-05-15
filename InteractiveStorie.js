// Get references to HTML elements
const storyTextElement = document.getElementById('story-text');
const choicesElement = document.getElementById('choices');
// Agregar referencia para la imagen de la historia
let storyImageElement = document.getElementById('story-image');
if (!storyImageElement) {
    storyImageElement = document.createElement('img');
    storyImageElement.id = 'story-image';
    storyImageElement.style.display = 'block';
    storyImageElement.style.margin = '0 auto 18px auto';
    storyImageElement.style.maxWidth = '90%';
    storyImageElement.style.maxHeight = '180px';
    storyTextElement.parentNode.insertBefore(storyImageElement, storyTextElement);
}

// Story data - easily modifiable
const story = {
    start: {
        text: "You awaken in a dark forest. The air is thick with the scent of damp earth and pine.",
        image: "polaroid-forest.png", // Cambia por la imagen que desees
        choices: [
            { text: "Explore the forest", next: "forestPath" },
            { text: "Examine your surroundings", next: "examineSurroundings" }
        ]
    },
    examineSurroundings: {
        text: "You see a worn path leading deeper into the woods and a faint light in the distance.",
        image: "polaroid-path.png",
        choices: [
            { text: "Follow the path", next: "forestPath" },
            { text: "Head towards the light", next: "light" }
        ]
    },
    forestPath: {
        text: "You walk along the path, the trees closing in around you.  A raven caws overhead.",
        image: "polaroid-raven.png",
        choices: [
            { text: "Continue on the path", next: "raven" },
            { text: "Turn back", next: "start" }
        ]
    },
    raven: {
        text: "The raven lands on a branch, its eyes fixed on you. It seems to be watching.",
        image: "polaroid-raven-close.png",
        choices: [
            { text: "Speak to the raven", next: "speakRaven" },
            { text: "Ignore the raven and continue", next: "continuePath" }
        ]
    },
    speakRaven: {
        text: "The raven replies, 'The path is long, but the end is near.'",
        image: "polaroid-raven-talk.png",
        choices: [
            { text: "Continue on the path", next: "continuePath" }
        ],
        effects: [
            { index: 20, color: 'red' }, // 'p' in 'path'
            { index: 25, size: '1.2em' } // 'i' in 'is'
        ]
    },
    continuePath: {
        text: "You continue on the path and eventually reach a clearing.",
        image: "polaroid-clearing.png",
        choices: []
    },
    light: {
        text: "You approach the light and find a small cottage.",
        image: "polaroid-cottage.png",
        choices: []
    }
};

// Current scene identifier
let currentScene = 'start';

// Function to display text with a typing effect, and apply effects
function showText(text, element, effects = [], delay = 50) {
    let i = 0;
    element.textContent = ''; // Clear previous text
    const intervalId = setInterval(() => {
        let char = text[i];
        let charElement = document.createElement('span');
        charElement.textContent = char;

        // Apply character-specific effects
        effects.forEach(effect => {
            if (effect.index === i) {
                if (effect.color) charElement.style.color = effect.color;
                if (effect.size) charElement.style.fontSize = effect.size;
                if (effect.animation) charElement.style.animation = effect.animation;
                if (effect.delay) {
                    setTimeout(() => {
                        element.appendChild(charElement);
                    }, effect.delay);
                    return; // Skip appending immediately
                }
            }
        });

        element.appendChild(charElement);
        i++;
        if (i >= text.length) {
            clearInterval(intervalId); // Stop when all text is displayed
        }
    }, delay);
}

// Function to display choices
function showChoices(choices) {
    choicesElement.innerHTML = ''; // Clear previous choices
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            currentScene = choice.next; // Update current scene
            showScene(); // Display the new scene
        });
        choicesElement.appendChild(button);
    });
}

// Function to display a scene
function showScene() {
    const scene = story[currentScene]; // Get the current scene data
    // Mostrar imagen ilustrativa si existe
    if (scene.image) {
        storyImageElement.src = scene.image;
        storyImageElement.style.display = 'block';
    } else {
        storyImageElement.style.display = 'none';
    }
    showText(scene.text, storyTextElement, scene.effects); // Display the scene text with effects
    showChoices(scene.choices); // Display the scene choices
}

// Start the story
showScene();
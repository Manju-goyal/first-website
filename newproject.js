// Typing Effect
const text = "Aspiring Software Developer | DSA Enthusiast";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark");
}

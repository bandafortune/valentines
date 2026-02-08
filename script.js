let noCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Move NO button randomly
function moveNoButton() {
    const container = document.querySelector(".buttons");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Move when mouse comes near
noBtn.addEventListener("mouseover", moveNoButton);

// When NO is clicked
noBtn.addEventListener("click", () => {
    noCount++;

    yesBtn.style.fontSize = (20 + noCount * 10) + "px";
    yesBtn.style.padding = (15 + noCount * 10) + "px";

    if (noCount >= 5) {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "0";
        yesBtn.style.left = "0";
        yesBtn.style.width = "100%";
        yesBtn.style.height = "100%";
        yesBtn.style.fontSize = "50px";

        noBtn.style.display = "none";
    }
});

// YES goes to next page
yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 40; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = "24px";
        heart.style.animation = "fall 2s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }

    setTimeout(() => {
        window.location.href = "date.html";
    }, 1200);
});


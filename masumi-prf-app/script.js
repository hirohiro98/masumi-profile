document.addEventListener("DOMContentLoaded", function () {
  const numPetals = 30;
  const petalImages = [
    'images/sakura.png',
    'images/sakura2.png',
  ];

  for (let i = 0; i < numPetals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const randomImage = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.style.backgroundImage = `url(${randomImage})`;

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.opacity = Math.random();
    petal.style.width = petal.style.height = 20 + Math.random() * 20 + "px";

    document.body.appendChild(petal);
  }



});



const createHeart = () => {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";
  // heart.style.fontSize = "20px";
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;

  heart.style.top = `50px`;
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.opacity = 1;
  heart.style.transition = "transform 4s, opacity 4s ease-in";

  document.body.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translateY(${window.innerHeight + 50}px)`;
    heart.style.opacity = "0.3";
  });

  setTimeout(() => {
    document.body.removeChild(heart);
  }, 4000);
};

setInterval(createHeart, 100);

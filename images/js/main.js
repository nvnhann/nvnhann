  function createFlower() {
    const flower = document.createElement("img");
    flower.src = "/images/flower.png"; // đường dẫn ảnh hoa
    flower.className = "flower";

    const size = Math.random() * 50 + 50; // kích thước 20–40px
    flower.style.width = `${size}px`;
    flower.style.left = `${Math.random() * window.innerWidth}px`;
    flower.style.animationDuration = `${3 + Math.random() * 5}s`;

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 10000);
  }

  setInterval(createFlower, 300);

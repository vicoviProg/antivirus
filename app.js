//movement animation to happen

function gerak(container, card) {
  container.addEventListener("mousemove", (e) => {
    let xAxis = window.innerWidth / 50 - e.pageX / 20;
    let yAxis = window.innerWidth / 20 - e.pageY / 10;
    console.log(xAxis, yAxis);
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  });

  //animate in
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 1s ease";
  });

  //animate out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}

gerak(
  document.querySelector(".barang1"),
  document.querySelector(".barang1 img")
);
gerak(
  document.querySelector(".barang2"),
  document.querySelector(".barang2 img")
);
gerak(
  document.querySelector(".barang3"),
  document.querySelector(".barang3 img")
);

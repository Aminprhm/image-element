document.addEventListener("DOMContentLoaded", () => {
const newDiv = document.createElement("div");
const img = document.createElement("img");
img.src = "https://latex.codecogs.com/svg.image?&space;a^{2}";
newDiv.appendChild(img);
const container = document.getElementById("li_2").firstElementChild;
container.appendChild(newDiv);
})

document.addEventListener('DOMContentLoaded', function() {
const newDiv = document.createElement("div");
const img = document.createElement("img");
img.src = "https://latex.codecogs.com/svg.image?a^{2}";
newDiv.appendChild(img);
const container = document.getElementById("form_description");
container.appendChild(newDiv);
})

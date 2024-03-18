const newDiv = document.createElement("div");
const img = document.createElement("img");
img.src = "<img src="https://latex.codecogs.com/png.image?\dpi{110}&space;a_{2}" title=" a_{2}" />";
newDiv.appendChild(img);
const container = document.getElementById("container");
container.appendChild(newDiv);

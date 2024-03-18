const newDiv = document.createElement("div");
const img = document.createElement("img");
img.src = "path/to/your/image.jpg";
newDiv.appendChild(img);
const container = document.getElementById("container");
container.appendChild(newDiv);
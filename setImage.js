const containerId = "form_description";

const observer = new MutationObserver(mutations => {
  const container = document.getElementById(containerId);
  if (container) {
    const newDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = "https://latex.codecogs.com/svg.image?a^{2}";
    newDiv.appendChild(img);
    container.appendChild(newDiv);

    observer.disconnect();
  }
});

observer.observe(document.documentElement, { childList: true });

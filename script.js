const container = document.getElementById("container");
const changeColor = document.getElementById("changeColor");
const addChild = document.getElementById("addChild");
const removeChild = document.getElementById("removeChild");

changeColor.addEventListener("click", function() {
  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  container.style.backgroundColor = randomColor;
});

addChild.addEventListener("click", function() {
  const child = document.createElement("div");
  child.classList.add("child");
  container.appendChild(child);
});

removeChild.addEventListener("click", function() {
  const children = container.children;
  if (children.length > 0) {
    container.removeChild(children[children.length - 1]);
  }
});

function changeBackgroundColor() {
  const color = [
    "#EBD9CB",
    "#F9F6F1",
    "#DBE2EC",
    "#F7F0EA",
    "#D2D3D5",
    "#F5F4F0",
    "#F6E1DC",
  ];
  const randomColor = color[Math.floor(Math.random() * color.length)];
  const button = document.getElementById("change");
  document.body.style.backgroundColor = randomColor;
  button.style.background = randomColor;
}

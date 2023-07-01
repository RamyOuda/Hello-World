let isBlue = true;

function changeColors() {
  const bodyRef = document.querySelector("body");
  const messageRef = document.querySelector(".message");

  if (isBlue) {
    bodyRef.style.background = "linear-gradient(#8b0000, #002c2e)";
    messageRef.style.color = "#8b0000";
  } else {
    bodyRef.style.background = "linear-gradient(#00aab0, #002c2e)";
    messageRef.style.color = "#008b8b";
  }

  toggleBlue();
}

function toggleBlue() {
  isBlue = !isBlue;
}

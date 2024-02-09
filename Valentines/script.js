const evilButton = document.getElementById("evil-button");
const OFFSET = 100;

window.onload = function () {
  var video = document.getElementById("myVideo");
  video.style.display = "none";
  video.pause();
};

evilButton.addEventListener("click", () => {
  alert("Nice Try");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = evilButton.getBoundingClientRect();
  const horizontalDistanceFrom = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFrom = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;
  if (
    Math.abs(horizontalDistanceFrom) <= horizontalOffset &&
    Math.abs(verticalDistanceFrom) <= verticalOffset
  ) {
    setButtonPosition(
      buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 10,
      buttonBox.y + (verticalOffset / verticalDistanceFrom) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = evilButton.getBoundingClientRect();

  if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = windowBox.right - buttonBox.width - OFFSET;
  }
  if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = windowBox.left + OFFSET;
  }
  if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    top = windowBox.bottom - buttonBox.height - OFFSET;
  }
  if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    top = windowBox.top + OFFSET;
  }

  evilButton.style.left = `${left}px`;
  evilButton.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}

document.getElementById("yesButton").addEventListener("click", function () {
  var video = document.getElementById("myVideo");
  var noButton = document.getElementById("evil-button");
  var valentineDiv = document.getElementById("valentine?"); // select the div by its id
  video.style.display = "block";
  video.play();
  noButton.style.display = "none"; // hides the "No" button
  valentineDiv.style.display = "none"; // hides the div
});

// Trailing hearts function
document.addEventListener("mousemove", function (e) {
  var heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.userSelect = "none";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1000";
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;
  document.body.appendChild(heart);

  // animate the heart
  heart.style.transition = "all 0.5s";
  heart.style.transform = "translateY(-20px)";
  heart.style.opacity = "0";

  // remove the heart after animation
  setTimeout(function () {
    heart.parentNode.removeChild(heart);
  }, 500);
});

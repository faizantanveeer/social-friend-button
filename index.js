var statuss = document.querySelector("h4");
var btn = document.querySelector("#add");

var image = document.querySelector("img");
var heart = document.querySelector("i");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag === 0) {
    statuss.innerHTML = "Friends";
    statuss.style.color = "Green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    statuss.innerHTML = "Stranger";
    statuss.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});

var check = 0;

  image.addEventListener("dblclick", function () {
      heart.style.transform = "translate(-40%, -130%) scale(1)";

      setTimeout(function () {
        heart.style.opacity = 0;
      }, 2000);
  });


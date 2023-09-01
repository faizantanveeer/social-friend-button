var statuss = document.querySelector("h4");
var btn = document.querySelector("#add");
var flag = 0;

btn.addEventListener("click", function () {

  if(flag === 0){
    statuss.innerHTML = "Friends";
    statuss.style.color = "Green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
    
  }else{
    statuss.innerHTML = "Stranger";
    statuss.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});

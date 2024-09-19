var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {
        position ? (position = 0) : (position = 800);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.1s ease";
      });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 800);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.1s ease";
      });
  } else {
    btn.addEventListener("mouseover", function() {
        position ? (position = 0) : (position = 800);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.1s ease";
        });
  }

function tanks() {
alert("Obrigado amigo você é um amigo.")
}  

function not() {
alert("Volta e aceita essa merda.")
}  
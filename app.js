const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById('btn');
let color = document.querySelector(".color");

btn.addEventListener('click', function(){
  const colorx = getRamdomNumber();
  document.body.style.backgroundColor = colors[colorx];

  color.textContent = colors[colorx];

  console.log('button clicked!');
});

function getRamdomNumber(){
  return Math.floor(Math.random() * colors.length);
}
const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener('click' ,function(){
  let hexX ='#';
  let hexColor = getRamdomHex();

  const btn = document.getElementById('btn');
  const color = document.querySelector(".color");

  for(let i = 0; i < 6; i++){
    hexX = hexX + hex[getRamdomHex()];
  }
  document.body.style.backgroundColor = hexX; 
  color.textContent = hexX;
});

function getRamdomHex(){
  return Math.floor(Math.random() * hex.length);
}
const items = document.querySelectorAll('.item');
const vh = window.innerHeight * 0.01;

for (let i = 0; i < items.length; i++){
  items[i].style.height = `${20 * vh}px`;

}

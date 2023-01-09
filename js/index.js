const arrowLeft = './imgs/arrowLeft.svg';
const arrowRight = './imgs/arrowRight.svg';
let isOpen = true;

const clickCollapseIcon = () => {
  isOpen = !isOpen;
  const element = document.getElementById('collapse_card');
  const iconElement = document.getElementById('collapse_card_icon');
  const cardCollapseClass = isOpen ? 'collapse-card-container' : 'hide-collapse-card-container'
  element.className = cardCollapseClass;
  iconElement.src = isOpen ? arrowLeft : arrowRight;
}
const buttonOpen= document.querySelector('.btn-open');
const buttonClose= document.querySelector('.btn-close');
const menuItem = document.querySelectorAll('.mobile-menu-item');


function open(){
  const container = document.querySelector('.mobile-menu-container');
  container.style.display='block';
}

function close(){
const container = document.querySelector('.mobile-menu-container');
  container.style.display='none';
}

buttonOpen.addEventListener('click', open);
buttonClose.addEventListener('click', close);

menuItem.forEach((item) => {
  item.addEventListener("click", close);
});
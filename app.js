const padre = document.querySelector('.container-parent');

padre.addEventListener('click', probarDom);

function probarDom() {
  padre.style.backgroundColor = "white";
  padre.style.borderRadius = "10px";  
}
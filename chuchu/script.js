const buttons = document.querySelectorAll('.size-btn');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

  });

});

function comprar(){

  const tamanho = document.querySelector('.size-btn.active').innerText;

  alert("Chuteira adicionada ao carrinho! Tamanho: " + tamanho);

}
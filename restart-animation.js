// não precisa modificar este arquivo!
// faz a animação do texto recomeçar toda vez que um "link" de filme é
// clicado
//

export function restartAnimation(introEl) {
  // remove a classe ".introducao-animada", que faz o texto subir
  introEl.classList.remove('introducao-animada');
  // define a propriedade visibility como hidden para evitar que o usuário
  // veja a animação sendo interrompida
  introEl.style.visibility = 'hidden';

  // daqui 0ms (no próximo "tick" de atualização), devolver a classe
  // ".introducao-animada" e tornar o texto visível novamente
  setTimeout(() => {
    introEl.classList.add('introducao-animada');
    introEl.style.visibility = 'initial';
  }, 0);
}
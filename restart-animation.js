// não modificar este arquivo!
// faz a animação do texto recomeçar toda vez que um "link" de filme é
// clicado
//
// implementei duas abordagens: uma usando jQuery e outra sem
// isso pode ser útil para você poder comparar um mesmo código usando
// jQuery e usando "vanilla" JavaScript (JavaScript "puro")


// se tivermos jQuery, usa-lo
if (typeof $ !== 'undefined') {
  // pega o elemento que contém o texto com a intro do filme
  let $introTextEl = $('.flow > pre');

  // atribui um evento de clique à <nav id="movies"></nav>, mas que vai
  // disparar apenas se o que for clicado for um <li></li>
  // (isso chama "event delegation")
  //
  $('#movies').on('click', 'li', function(e) {
    // remove a classe ".reading-animation", que faz o texto subir
    $introTextEl.removeClass('reading-animation');
    // define a propriedade visibility como hidden para evitar que o usuário
    // veja a animação sendo interrompida
    $introTextEl.css('visibility', 'hidden');

    // daqui 0ms (no próximo "tick" de atualização), devolver a classe
    // ".reading-animation" e tornar o texto visível novamente
    setTimeout(function() {
      $introTextEl.addClass('reading-animation');
      $introTextEl.css('visibility', 'visible');
    }, 0);
  });
}



// se não tiver jQuery, fazer com vanilla javascript
else {
  // pega o elemento que contém o texto com a intro do filme
  let introTextEl = document.querySelector('.flow > pre');

  // atribui um evento de clique à <nav id="movies"></nav>
  document.querySelector('#movies').addEventListener('click', function(e) {
    // queremos apenas cliques cujo alvo foram <li></li>
    if (e.currentTarget.matches('li')) {
      // remove a classe ".reading-animation", que faz o texto subir
      introTextEl.classList.remove('reading-animation');
      // define a propriedade visibility como hidden para evitar que o usuário
      // veja a animação sendo interrompida
      introTextEl.style.visibility = 'hidden';

      // daqui 0ms (no próximo "tick" de atualização), devolver a classe
      // ".reading-animation" e tornar o texto visível novamente
      setTimeout(function() {
        introTextEl.classList.add('reading-animation');
        introTextEl.style.visibility = 'visible';
      }, 0);
    }
  });
}

# cefet-web-starwars

Um página com as intros do melhores filmes _ever_

![](imgs/star-wars.png)

## Atividade

Você deve usar a Star Wars API (http://swapi.co) para poder (a) carregar
dinamicamente a lista de filmes e (b) também para exibir o respectivo texto
introdutório quando o usuário selecionar um filme.

Os exercícios são:

1. Incluir a biblioteca jQuery (versão mais nova)
   - Procure como fazer isso no Google
   - Posso não usar jQuery? Veja o [FAQ](#faq)
1. Fazer uma chamada AJAX para recuperar a lista de filmes e preencher o
   `<nav id="movies">...</nav>`
   <!-- - Fazer o exercício no arquivo `starwars.js`
   - Está tendo o seguinte erro?
     ```

     ```
     - Veja o _slide_ oculto sobre [configurar um servidor local][setup-local-server] -->
1. Fazer com que, ao clicar em um filme, uma chamada AJAX seja feita para
   pegar os detalhes do filme e, então, atualizar o texto introdutório
1. Salvar, em `localStorage`, qual foi o último filme visualizado e, quando
   a página for carregada, mostrar esse filme
1. _Extra_: buscar e colocar um áudio na página (você sabe qual!!!)


## FAQ

1. Posso <u>não</u> usar jQuery?
  - Pode sim!! Até acho ótimo, porque aí você não fica preso a 01 biblioteca
    JavaScript em particular. Existem outras similares, como
    [prototype.js][prototype], [MooTools][mootools], [YUI][yui] etc. Mas bom
    mesmo é JavaScript =)
1. O que é esse `"data-episode-url"` em `<li data-episode-url="...">...</li>`?
   - Em HTML, podemos "criar" novos atributos com o nome e o valor que quisermos
     - Tipicamente, damos o nome desses novos atributos de `data-algumacoisa`,
       para informar que ele é um atributo "de dados" e não um atributo
       padrão do HTML
     - Para recuperar o valor de um _data attribute_:
       ```html
       <button id="b" data-sorriso=":D">Me dê um sorriso</button>
       ```
       - Podemos:
         ```js
         let sorrisoEl = document.querySelector('#b');
         window.alert(sorrisoEl.getAttribute('data-sorriso'));
         ```
       - Ou então, se estiver usando atributos que começam com `data-`:
         ```js
         let sorrisoEl = document.querySelector('#b');
         window.alert(sorrisoEl.dataset.sorriso);
         ```
   - Neste caso, **uma ideia é colocar a URL da chamada AJAX a ser feita** para
     recuperar os detalhes daquele episódio
     - E quando o elemento for "clicado", recuperar a URL e fazer a chamada AJAX
1. Como fazer chamadas AJAX?
   - Veja nos [slides sobre AJAX][ajax]
1. Como usar o `localStorage`?
   - Veja nos [slides sobre Web Storage][web-storage]


[prototype]: http://prototypejs.org/
[mootools]: https://mootools.net/
[yui]: https://yuilibrary.com/
[setup-local-server]: https://fegemo.github.io/cefet-web/classes/js4/#setup-local-server
[ajax]: https://fegemo.github.io/cefet-web/classes/js4/#ajax
[web-storage]: https://fegemo.github.io/cefet-web/classes/js4/#web-storage

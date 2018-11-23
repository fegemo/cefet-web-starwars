# Guerras Estelares :stars:

Um página com as intros do melhores filmes _ever_

![](imgs/star-wars.png)

## Atividade

Você deve usar a Star Wars API (http://swapi.co) para poder (a) carregar
dinamicamente a lista de filmes e (b) também para exibir o respectivo texto
introdutório quando o usuário selecionar um filme.

Os exercícios são:

1. Dar uma explorada na Star Wars API (http://swapi.co)
1. Incluir a biblioteca jQuery (versão mais nova), caso deseje usá-la
   - Procure como fazer isso no Google
   - Posso não usar jQuery? Veja o [FAQ](#faq)
1. Fazer uma requisição assíncrona à API (chamada AJAX) para recuperar a
   lista de filmes, com todas as informações de cada filme, e preencher o
   `<nav id="movies">...</nav>`
   <!-- - Fazer o exercício no arquivo `starwars.js`
   - Está tendo o seguinte erro?
     ```

     ```
     - Veja o _slide_ oculto sobre [configurar um servidor local][setup-local-server] -->
1. Fazer com que, ao clicar em um filme, atualizar o texto introdutório para
   a sua respectiva intro
1. Salvar, em `localStorage`, qual foi o último filme visualizado e, quando
   a página for carregada, mostrar esse filme
1. _Extra_: buscar e colocar um áudio na página (você sabe qual!!!)


## FAQ

1. Posso <u>não</u> usar jQuery?
  - Pode sim!! Até acho ótimo, porque aí você não fica preso a 01 biblioteca
    JavaScript em particular. Você pode:
    1. Usar outra biblioteca (procure por ajax em http://microjs.com)
    1. Usar [XMLHttpRequest][ajax] diretamente
    1. Usar [fetch][fetch-api]
1. Como fazer chamadas AJAX?
   - Veja nos [slides sobre AJAX][ajax]
1. Como usar o `localStorage`?
   - Veja nos [slides sobre Web Storage][web-storage]


[setup-local-server]: https://fegemo.github.io/cefet-web/classes/js4/#setup-local-server
[ajax]: https://fegemo.github.io/cefet-web/classes/js4/#ajax
[web-storage]: https://fegemo.github.io/cefet-web/classes/js4/#web-storage
[fetch-api]: https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API

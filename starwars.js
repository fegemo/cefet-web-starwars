// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

const apiEndpoint = 'https://swapi.co/api/';

function toRoman(str) {
  return {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '6': 'VI',
    '7': 'VII',
    '8': 'VIII',
    '9': 'IX',
    '10': 'X',
    '11': 'XI',
    '12': 'XII'
  }[str];
}
let movies = null;

function loadMovieIntro({ episode_id, title, opening_crawl }) {
  $('.flow > pre').html(`
    Episode ${toRoman(episode_id)}
    ${title.toUpperCase()}
    ${opening_crawl}`);
}

function loadMovies(response) {
  const $movies = $('#movies ul');
  $movies.empty();

  movies = response.results.sort((a, b) => a.episode_id - b.episode_id);

  movies.forEach(m => {
    $movies.append(`<li data-episode_id="${m.episode_id}">Episode ${toRoman(m.episode_id)}</li>`);
  });

  $('#movies li').click(function(e) {
    loadMovieIntro(movies.find(m => m.episode_id == e.currentTarget.dataset.episode_id));
  });
}

$.get(`${apiEndpoint}films/`, null, loadMovies);

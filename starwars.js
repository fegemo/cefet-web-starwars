// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

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

function loadMovieIntro(response) {
  $('.flow > pre').html(`
    Episode ${toRoman(response.episode_id)}
    ${response.title.toUpperCase()}

    ${response.opening_crawl}`);
}

function loadMovies(response) {
  var $movies = $('#movies ul'),
    films = response.results.sort((a, b) => a.episode_id > b.episode_id);

  $movies.empty();

  films.forEach(function(f) {
    $movies.append(`<li data-episode-url="${f.url}">
        Episode ${toRoman(f.episode_id)}
      </li>`);
  });

  $('#movies li').click(function(e) {
    let episodeUrl = e.currentTarget.dataset.episodeUrl;
    $.get(episodeUrl, null, loadMovieIntro);
  });


}

$.get(`${apiEndpoint}films/`, null, loadMovies);

// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.dev/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução
import { restartAnimation } from './restart-animation.js'
import { toRoman  } from './roman.js'
import { friendlyFetch } from './friendly-fetch.js'
import { play } from './music.js'

const API_ENDPOINT = 'https://swapi.dev/api'
const introEl = document.querySelector('.introducao')
const moviesEl = document.querySelector('#filmes ul');

function loadMovieIntro({ episode_id, title, opening_crawl }) {
  introEl.innerHTML = `Episode ${toRoman(episode_id)}
    ${title.toUpperCase()}

    ${opening_crawl}`
  restartAnimation(introEl)
}

function loadMovies(movies) {
  moviesEl.innerHTML = ''

  movies
    .sort((a, b) => a.episode_id - b.episode_id)
    .forEach(m => {
      const template = `<li>Episode ${toRoman(m.episode_id).padEnd(3, ' ')} - ${m.title}</li>`
      const movieEl = document.createRange().createContextualFragment(template).firstElementChild
      movieEl.addEventListener('click', () => loadMovieIntro(m))
      moviesEl.appendChild(movieEl)
    });
}

const movies = await friendlyFetch(`${API_ENDPOINT}/films/`)

loadMovies(movies.results)

const song = {
  audioUrl: 'audio/tema-sw.mp3',
  coverImageUrl: 'imgs/logo.svg',
  title: 'Intro',
  artist: 'John Williams'
}
play(song, document.body)
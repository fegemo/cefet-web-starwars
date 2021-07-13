export class AudioPlayer {
  static #STYLES_ATTACHED = false
  #audioUrl
  #coverImageUrl
  #title
  #artist
  #progressEl
  #coverImageEl
  #parentEl
  #audio
  #el
  
  constructor() {
    // força que as funções mantenham o `this` mesmo quando acionadas
    // por eventos (usando o fn.bind(this))
    this.#playOrPause = this.#playOrPause.bind(this)
    this.#updateProgress = this.#updateProgress.bind(this)
  }
  
  start({audioUrl, coverImageUrl, title, artist}, parentEl) {
    this.#audioUrl = audioUrl
    this.#coverImageUrl = coverImageUrl
    this.#title = title
    this.#artist = artist
    this.#parentEl = parentEl

    const template = this.#render()
    this.#el = document.createRange().createContextualFragment(template).firstElementChild
    this.#el.querySelector('.audio-play-pause').addEventListener('click', this.#playOrPause)
    this.#progressEl = this.#el.querySelector('.audio-progress')
    this.#progressEl.value = 0
    this.#coverImageEl = this.#el.querySelector('.audio-cover')
    
    if (!AudioPlayer.#STYLES_ATTACHED) {
      const styleEl = document.createElement('style')
      styleEl.innerHTML = AudioPlayer.#styles
      document.head.appendChild(styleEl)
      
      AudioPlayer.#STYLES_ATTACHED = true
    }
    
    this.#parentEl.appendChild(this.#el)
    this.#audio = new Audio(this.#audioUrl)
    this.#audio.volume = 0.05
    this.#audio.addEventListener('timeupdate', this.#updateProgress)
    
    setTimeout(() => this.#progressEl.style.width = this.#el.offsetHeight + 'px', 0)
  }

  #playOrPause = () => {
    if (this.playing) {
      this.pause()
    } else {
      this.play()
    }
  }

  play() {
    if (this.#audio) {
      if (this.#audio.currentTime >= this.#audio.duration) {
        this.#audio.currentTime = 0
      }
      this.#audio.play()
      this.#coverImageEl.classList.add('spinning')
    }
  }

  pause() {
    this.#audio.pause()
    this.#coverImageEl.classList.remove('spinning')
  }

  #updateProgress = () => {
    this.#progressEl.value = this.#audio.currentTime / this.#audio.duration
    if (this.#audio.currentTime >= this.#audio.duration) {
      this.pause()
    }
  }

  get playing() {
    return !this.#audio?.paused
  }

 #render() {
    return `
      <div class="audio-player">
        <div class="audio-cover-container">
          <svg class="audio-cover">
            <defs>
              <mask id="hole">
                <rect width="100%" height="100%" fill="white"/>
                <circle cx="50%" cy="50%" fill="black"/>
              </mask>
            </defs>
            <circle cx="50%" cy="50%" />
            <image xlink:href="${this.#coverImageUrl}" mask="url(#hole)" />
          </svg>
          <button type="button" class="audio-play-pause">▶️</button>
        </div>
        <div class="info-audio">
          <div class="audio-title">${this.#title}</div>
          <div class="audio-artist">${this.#artist}</div>
        </div>
        <div class="audio-controls">
        </div>
        <progress value="0" max="1" class="audio-progress"></progress>
      </div>
    `
  }

  static get #styles() {
    return `
      .audio-player {
        position: absolute;
        right: 0;
        top: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 110px;
        background-color: #fff6;
        border-radius: 50% 0 0 50%;
        padding: 1rem;
        transform: translateX(70%);
        transition: all 200ms ease;
      }

      .audio-player:hover {
        transform: translateX(0);
      }

      .audio-cover {
        --size: 100px;
        --outline-color: #fff5;
        --outline-width: 1px;
        --hole-radius: 15%;
        position: relative;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        border: var(--outline-width) solid var(--outline-color);
        animation: spinning 10s linear 0s infinite;
        animation-play-state: paused;
      }

      .audio-cover.spinning {
        animation-play-state: running;
      }

      .audio-cover circle {
        r: var(--hole-radius);
      }

      .audio-cover > circle {
        stroke: var(--outline-color);
        stroke-width: var(--outline-width);
      }

      .audio-cover > image {
        width: var(--size);
        height: var(--size);
      }

      .audio-cover-container  {
        position: relative;
        transition: transform 200ms ease;
      }

      .audio-cover-container:hover {
        transform: scale(1.1);
      }

      .audio-cover-container:active {
        transform: translate(2px, 2px) scale(1.1);
      }

      .audio-progress {
        appearance: none;
        transform: rotate(90deg) translateX(100%);
        position: absolute;
        transform-origin: right top;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: transparent;
        height: 5px;
        border: none;
      }

      .audio-play-pause {
        appearance: none;
        opacity: 0;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        cursor: pointer;
      }

      .audio-player ::-webkit-progress-bar {
        background-color: transparent;
        height: 5px;
      }

      .audio-player ::-moz-progress-bar {
        background-color: cornflowerblue;
        transition: all 50ms linear;
      }

      .audio-player ::-webkit-progress-value {
        background-color: cornflowerblue;
        transition: all 50ms linear;
      }

      .info-audio {
        text-align: center;
      }

      .audio-artist {
        font-size: 80%;
      }

      @keyframes spinning {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(1turn);
        }
      }

    `
  }
}


let player = new AudioPlayer()

export function play({audioUrl, coverImageUrl, title, artist}, parentEl) {
  player.start({audioUrl, coverImageUrl, title, artist}, parentEl)
}


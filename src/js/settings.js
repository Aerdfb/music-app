export const select = {
  templateOf: {
    musicWidget: '#template-music-widget'
  },
  containerOf: {
    musicWrapper: '#music-list'

  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  }
};

export const templates = {
  musicWidget: Handlebars.compile(document.querySelector(select.templateOf.musicWidget).innerHTML),
};
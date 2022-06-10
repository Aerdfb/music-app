export const select = {
  templateOf: {
    musicWidget: '#template-music-widget'
  },
  containerOf: {
    musicWrapper: '#music-list',
    pages: '#pages',
    discover: '#discover-song',
    searchResult: '.searchResult'

  },
  nav:{
    links: '.nav-link'
  },
  search: {
    input: 'searchInput',
    button: '.searchButton',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
  }
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  }
};

export const templates = {
  musicWidget: Handlebars.compile(document.querySelector(select.templateOf.musicWidget).innerHTML),
};
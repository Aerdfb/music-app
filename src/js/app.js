import { select, settings } from './settings.js';
import songs from './components/music.js';

const app = {
  initMusic(){
    const thisApp = this;

    const homeWrapper = document.querySelector(select.containerOf.musicWrapper);
    // console.log(homeWrapper);

    for(let song in thisApp.data.fileName){
    //   console.log(song);
      console.log(thisApp.data.fileName);
      new songs(thisApp.data.fileName[song], homeWrapper);
    }
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '#music-wrapper .gap',
      stopOtherOnPlay: true,
      enableKeystrokes: true,
    });

  },

  initData: function(){
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.songs;
    // console.log(url);

    thisApp.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisApp.data.fileName = parsedResponse;
        // console.log(parsedResponse);

        thisApp.initMusic();
      });
  },

  init: function(){
    const thisApp = this;

    thisApp.initData();
  }
};

app.init();
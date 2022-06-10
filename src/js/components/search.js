import { select } from '../settings.js';
import songs from './music.js';

class Search{
  constructor(data){
    const thisWdiget = this;
    thisWdiget.data = data;

    thisWdiget.dom = {};
    thisWdiget.getElements();
    thisWdiget.initActions();
  }

  getElements(){
    const thisWdiget = this;
    thisWdiget.dom.input = document.getElementById(select.search.input);
    thisWdiget.dom.button = document.querySelector(select.search.button);
    thisWdiget.dom.wrapper = document.querySelector(select.containerOf.searchResult);
  }

  initActions(){
    const thisWdiget = this;
    console.log(thisWdiget.dom.button);

    thisWdiget.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      thisWdiget.clearResults()
      thisWdiget.initSearch();
    });
  }

  initSearch(){
    const thisWdiget = this;
    thisWdiget.value = document.getElementById(select.search.input).value;
    console.log(thisWdiget.value);
    console.log(thisWdiget.data.songs);
    for (let song in thisWdiget.data.songs){
      // console.log(song);
      let songName = thisWdiget.data.songs[song].title;

      if(songName.includes(thisWdiget.value)){
        console.log(thisWdiget.value);
        new songs(thisWdiget.data.songs[song], thisWdiget.dom.wrapper);
        
        // eslint-disable-next-line no-undef
        GreenAudioPlayer.init({
          selector: '#music-wrapper .gap',
          stopOtherOnPlay: true,
          enableKeystrokes: true,
        });
      } else
        console.log('nie znaleziono');
    }

  }

  clearResults(){
    const thisWdiget = this;

    thisWdiget.dom.wrapper.innerHTML = '';
  }
}

export default Search;


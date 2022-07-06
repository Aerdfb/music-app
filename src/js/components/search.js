import { select, templates } from '../settings.js';
import { utils } from '../utils.js';
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
    console.log(thisWdiget.dom.wrapper);
    thisWdiget.dom.numberOfSongWrapper = document.querySelector(select.containerOf.numberofSongs);
  }

  initActions(){
    const thisWdiget = this;
    console.log(thisWdiget.dom.button);

    thisWdiget.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      thisWdiget.clearResults();
      thisWdiget.initSearch();
    });
  }

  initSearch(){
    const thisWdiget = this;
    thisWdiget.value = document.getElementById(select.search.input).value;
    
    // console.log(thisWdiget.value);
    // console.log(thisWdiget.data.songs);
    let valueRegEx = new RegExp(thisWdiget.value, 'i');
    console.log(valueRegEx);

    let numberOfSong = 0;

    for (let song in thisWdiget.data.songs){
      // console.log(song);
      let songName = thisWdiget.data.songs[song].filename;

      const searchAmount = songName.search(valueRegEx);
      console.log(searchAmount);
      
      if(searchAmount != -1){
        numberOfSong++;
        console.log(thisWdiget.value);
        new songs(thisWdiget.data.songs[song], thisWdiget.dom.wrapper);
      }}  
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.searchResult .gap',
      stopOtherOnPlay: true,
      enableKeystrokes: true,
    });

    thisWdiget.counter = {};

    if(numberOfSong == 1){
      thisWdiget.counter.number = numberOfSong.toString() + ' song';
    }else {
      thisWdiget.counter.number = numberOfSong.toString() + ' songs';
    }


    // thisWdiget.counter.number = numberOfSong;

    const generatedHTML = templates.searchWidget(thisWdiget.counter);
    thisWdiget.element = utils.createDOMFromHTML(generatedHTML);
    
    thisWdiget.dom.numberOfSongWrapper.appendChild(thisWdiget.element);
    console.log(numberOfSong);

  }

  clearResults(){
    const thisWdiget = this;

    thisWdiget.dom.wrapper.innerHTML = '';
    thisWdiget.dom.numberOfSongWrapper.innerHTML = '';
  }
}

export default Search;


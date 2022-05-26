import { utils } from '../utils.js';
import { templates } from '../settings.js';

class songs {
  constructor(data, wrapperElement){
    const thisSong = this;

    thisSong.data = data;
    thisSong.dom = {};
    thisSong.dom.wrapper = wrapperElement;

    thisSong.musicData();
    thisSong.renderSongs();
  }

  renderSongs(){
    const thisSong = this;
    
    const generatedHTML = templates.musicWidget(thisSong.musicData);

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    console.log(thisSong.element);
    const musicContainer = thisSong.dom.wrapper;

    // console.log(musicContainer);

    musicContainer.appendChild(thisSong.element);
  }

  musicData(){

    const thisSong = this;

    thisSong.musicData = {};
    
    thisSong.musicData.author = thisSong.data.author;
    thisSong.musicData.fileName = thisSong.data.filename;
    thisSong.musicData.id = thisSong.data.id;
    thisSong.musicData.categories = thisSong.data.categories;
    thisSong.musicData.ranking = thisSong.data.ranking;
    thisSong.musicData.title = thisSong.data.title;

    console.log(this.musicData);

  }

}

export default songs;
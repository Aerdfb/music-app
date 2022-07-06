import { select } from '../settings.js';
import songs from './music.js';

class discovery {
  constructor(data){
    const thisSong = this;
    thisSong.data = data;

    thisSong.randomSong();

  }

  randomSong(){
    const thisSong = this;
    // console.log(thisSong.data.songs);
    const numberOfSong = thisSong.data.songs.length;
    // console.log(numberOfSong);
    const randomSong = Math.floor(Math.random() * numberOfSong);
    const wrapper = document.getElementById(select.containerOf.discover);
    console.log(wrapper);

    new songs(thisSong.data.songs[randomSong], wrapper);

    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '#discover-song .gap',
      stopOtherOnPlay: true,
      enableKeystrokes: true,
    });
  }
}

export default discovery;
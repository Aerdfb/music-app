import { select, settings, classNames } from './settings.js';
import songs from './components/music.js';
import discovery from './components/discovery.js';
import Search from './components/search.js';


const app = {
  initPages: function(){
    const thisApp = this;
    
    // console.log(document.querySelector(select.containerOf.pages));
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    const idFromHash = window.location.hash.replace('#/', '');

    thisApp.activatePage(idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;
    // console.log(idFromHash);

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
        // console.log(clickedElement);

        /* get page id from href attribute*/

        const id = clickedElement.getAttribute('href').replace('#', '');
        // console.log(id);
        
        /* run thisApp.activatePage with that id */ 

        thisApp.activatePage(id);

        /* change URL hash */

        window.location.hash = '#/' + id;
      });
    }



  },

  activatePage: function(pageId){
    const thisApp = this;

    // console.log(thisApp.pages);

    /* add class "active" to matching pages, remove fron non-matching */
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove fron non-matching */
    // console.log(thisApp.navLinks);
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }

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
        thisApp.data.songs = parsedResponse;
        // console.log(parsedResponse);

        thisApp.initMusic();
        thisApp.initDiscovery();
        thisApp.initSearchWidget();
      });
  },

  initMusic(){
    const thisApp = this;

    const homeWrapper = document.querySelector(select.containerOf.musicWrapper);
    // console.log(homeWrapper);

    for(let song in thisApp.data.songs){
      console.log(song);
      // console.log(thisApp.data.songs);
      new songs(thisApp.data.songs[song], homeWrapper);
    }
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '#music-wrapper .gap',
      stopOthersOnPlay: true,
      enableKeystrokes: true,
    });

  },

  initDiscovery: function(){
    const thisApp = this;
    new discovery(thisApp.data);
  },

  initSearchWidget: function(){
    const thisApp = this;
    new Search(thisApp.data);
  },

  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
  }
};

app.init();
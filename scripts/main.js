

// problems to solve

// -- when image does load, how to only load images if they work, if they don't then load a filler image
// -- image click loads the player for all divs at once


var searchForm = document.querySelector('.search');
var searchButton = document.querySelector('.search-button');
var results = document.querySelector('.results');
var albumArt;
var songTitle;
var musicPlayer;


searchButton.addEventListener('click', function(e) {
  searchForm.classList.add("search-small");
  results.classList.add("results-show");
  var inputDiv = document.querySelector('.search-input');
  var userInput = inputDiv.value;
  fetchRequest(userInput);

});

var fetchRequest = function(input){

  'user string';

  fetch('https://api.soundcloud.com/tracks?client_id=86b6a66bb2d863f5d64dd8a91cd8de94&q=' + input)
    .then(function(response){
      if (response.status !== 200) {
        console.log("bad response: " + response.status);
        return
      }
      response.json().then(function(data){
        var returnedData = data;
        iterateAndAppend(returnedData);
        showListener();
      })
    })
  }


function showListener() {
  musicPlayer = document.getElementsByClassName('player');
  for (i = 0; i < albumArt.length; i++){
    albumArt[i].addEventListener('click', function(){
      console.log("you clicked some album art");

      for(j = 0; j < musicPlayer.length; j++) {
        musicPlayer[j].classList.add("player-show")
      }
    })
  };
}

  function iterateAndAppend(data) {
    results.innerHTML = "";
    albumArt = document.getElementsByClassName('album-art');
    songTitle = document.getElementsByClassName('song-title');
    musicPlayer = document.getElementsByClassName('player');
    for(i=0; i < data.length; i++){
      var userIteration = data[i]
      var markup = `
        <ul class="result-box">
          <li class="album-art"><img src="${userIteration.user.avatar_url}"></li>
          <li class="band-name">${userIteration.user.username}</li>
          <li class="song-title">${userIteration.title}</li>
          <li class="player">
            <audio class="music-player" controls="controls" src="${userIteration.stream_url}/?client_id=86b6a66bb2d863f5d64dd8a91cd8de94"></audio>
          </li>

        </ul>
      `
      results.innerHTML += markup;
  };
};







// 5. Create a way to listen for a click that will play the song in the audio play




// for BEASTMODE


// make results sortable by:
// - popularity (playback_count + download_count + favoritings_count + reposts_count)










// ************

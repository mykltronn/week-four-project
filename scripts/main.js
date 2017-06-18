
// problems to solve
// -- why doesn't the image load?
// -- why do the results disappear at the end of the loop?
// -- when image does load, how to only load images if they work, if they don't then load a filler image
// -- how to make event listeners on objects that don't exist until the fetch is resolved
// -- ^^ needed in order to make tracks play!

var musicPlayer = document.querySelector('.music-player');
var searchForm = document.querySelector('.search');
var searchButton = document.querySelector('.search-button');
var results = document.querySelector('.results');
var albumArt;
var songTitle;


searchButton.addEventListener('click', function(e) {
  searchForm.classList.add("search-small")
  results.classList.add("results-show")
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

      })
    })
  }



  function iterateAndAppend(data) {
    results.innerHTML = "";
    albumArt = document.getElementsByClassName('album-art');
    songTitle = document.getElementsByClassName('song-title');

    for(i=0; i < data.length; i++){
      var userIteration = data[i]

      var markup = `
        <ul class="result-box">
          <li class="album-art"><img src="${userIteration.artwork_url}"></li>
          <li class="band-name">${userIteration.user.username}</li>
          <li class="song-title">${userIteration.title}</li>
          <li class="player">
            <audio class="music-player" controls="controls" src=""></audio>
          </li>

        </ul>
      `
      results.innerHTML += markup;
    }
  }

  //
  // albumArt.addEventListener('click', function(e){
  //   musicPlayer.classList.add("player-show")
  // });









// 5. Create a way to listen for a click that will play the song in the audio play




// for BEASTMODE


// make results sortable by:
// - popularity (playback_count + download_count + favoritings_count + reposts_count)

// make audio player appear below the playing element.
// -- this doesn't work for some reason
        //
        // albumArt.addEventListener('click', function(e){
        //   musicPlayer.classList.add('music-player-show');
        // });
        //
        // songTitle.addEventListener('click', function(e){
        //   musicPlayer.classList.add('music-player-show');
        // });

          // this would be added to the markup var

        // <li class="player">
        //       <audio class="music-player" controls="controls" src="${userIteration.stream_url}"></audio>
        // </li>






// ************

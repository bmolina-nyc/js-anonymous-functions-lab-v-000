$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];
var songs = "";

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', menuClick)
}

// my refactor 
function menuClick(){
  return $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function play() {
  $('#play').on('click', playSong)
}

// my refactor
function playSong(){
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function pause() {
  $('#pause').on('click', pauseNotice) 
}

// my refactor
function pauseNotice(){
  $('#songPaused').html(songToPlay + " is paused");
}

function show() {
  $('#show').on('click', showSongs)
}


function showSongs(){
    for (var key in jukeboxSongs) {
      songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
    }
    $('#showSongs').html(songs);
}


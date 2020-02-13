import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Songs } from './greatest-hits'

function getHits(songs) {
  for (var i = 0; i < 5 ; i++) {
    $('#hit-list').append(`<li>${songs.hits[i].result.title}, <a href="${songs.hits[i].result.url}">Link to Lyrics</a></li>`)
    
  }

  $('img').attr('src',`${songs.hits[0].result.primary_artist.image_url}`)
  console.log(`${songs.hits[2].result.primary_artist.image_url}`)
}

async function order(input){
  let song = new Songs(input);
  await song.getFetch(input);
  if (song.status === false) {
    $('.errors').append('error! page not found! :)')
  }
  if( song.input === '') {
    $('.errors').append('error! please input an actual artist :)')
  } 
  await getHits(song.jsonifiedObj);
}
$(document).ready(function() {
  $('form#artisty').submit(function(event) {
    event.preventDefault();
    $('.output').show();
    $('img').attr('src', '');
    $('#hit-list').empty();
    $('.errors').empty();
    let userInput = $('#artist').val();
    order(userInput);
  })
})
 

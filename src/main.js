import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Songs } from './greatest-hits'

function getHits(songs) {
  for (var i = 0; i < 5 ; i++) {
    $('#hit-list').append(`<li>${songs.hits[i].result.title}</li>`)
  }
  $('img').attr('src',`${songs.hits[0].result.primary_artist.image_url}`)
  console.log(`${songs.hits[0].result.primary_artist.image_url}`)
}

async function order(input){
  let song = new Songs(input);
  await song.getFetch(input);
  await getHits(song.jsonifiedObj);

}
$(document).ready(function() {
  $('form#artisty').submit(function(event) {
    event.preventDefault();
    $('#hit-list').empty();
    let userInput = $('#artist').val();
    order(userInput);
  })
})
 

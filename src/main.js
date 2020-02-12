import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Songs } from './greatest-hits'

function getElements(songs) {

  $('#song').text(`This is their top greatest song: ${songs.hits[0].result.title}`)
}

async function order(){
  let song = new Songs();
  await song.getFetch();
  await getElements(song.jsonifiedObj);
}
$(document).ready(function() {
  $('form#artist').submit(function(event) {
    event.preventDefault();
    order();
  })
})
 

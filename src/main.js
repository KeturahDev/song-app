import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Songs } from './greatest-hits'

function getElements(songs) {

  $('#song1').text(`1: ${songs.hits[0].result.title}`)
  $('#song1').text(`1: ${songs.hits[0].result.title}`)
  $('#song2').text(`2: ${songs.hits[1].result.title}`)
}

async function order(input){
  console.log('input:',input)
  let song = new Songs(input);
  await song.getFetch(input);
  await getElements(song.jsonifiedObj);
}
$(document).ready(function() {
  $('form#artisty').submit(function(event) {
    event.preventDefault();
    let userInput = $('#artist').val();
    console.log(userInput)
    order(userInput);
  })
})
 

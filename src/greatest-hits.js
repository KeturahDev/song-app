export class Songs {
  constructor(input) {
    this.jsonifiedObj = '';
    this.input = input
    this.status = ''
    this.array = []
  }

  async getFetch(input) {
    try {
      let songs = await fetch(`https://genius.p.rapidapi.com/search?q=${input}`, {
        'method': 'GET',
        'headers': {
          'x-rapidapi-host':  "genius.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.APIKEY}`,
        }
        
      });
      console.log(songs.status);
      let json = await songs.json();
      this.array = json.response.hits;
        if (songs.status != 200) {
          this.status = false
        } else {
          this.jsonifiedObj = json.response;
          if (this.array.length > 1) {
            console.log('returns more than one object');
          } else {
            console.log('error: did not returnan array of objects')
          }
        }
    } catch(error) {
        console.warn('oh no whatcha do??');
    }
  } 
 


}

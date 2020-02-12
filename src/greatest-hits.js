export class Songs {
  constructor(input) {
    this.jsonifiedObj = '';
    this.input = input
    this.status = ''
  }

  async getFetch(input) {
    try {
      let songs = await fetch(`https://genius.p.rapidapi.com/sear?q=${input}`, {
        'method': 'GET',
        'headers': {
          'x-rapidapi-host':  "genius.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.API_KEY}`
        }

      });
      console.log(songs.status)
      if (songs.status != 200) {
        this.status = false
      } else {
        let json = await songs.json();
        this.jsonifiedObj = json.response;
      }
    } catch(error) {
        console.warn('oh no whatcha do??');
    }
  } 
 


}

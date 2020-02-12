export class Songs {
  constructor(input) {
    this.jsonifiedObj = '';
    this.input = input
  }

  async getFetch(input) {
    let songs = await fetch(`https://genius.p.rapidapi.com/search?q=${input}`, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-host':  "genius.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.API_KEY}`
      }
      
    });
    let json = await songs.json();
    this.jsonifiedObj = json.response;
  }
}

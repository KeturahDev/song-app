export class Songs {
  constructor() {
    this.jsonifiedObj = '';
  }

  async getFetch() {
    let songs = await fetch('https://genius.p.rapidapi.com/search?q=Post%20Malone', {
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

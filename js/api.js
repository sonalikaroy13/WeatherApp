class OpenWeather {
    constructor() {
        // this.url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.apikey = 'dddd0646017aa48ffd11f94c405492ae';
    }
    
    async search(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apikey}`);
        const results = await response.json();
        return results;
    }
  //search(cityName) {
  //    const cName = cityName;
  //    const url = this.url;
  //    const apikey = this.apikey;
  //    fetch(url + cName + '&appid=' + apikey).then(function (response) {
  //       console.log(response.json());
  //    })
  //}
}

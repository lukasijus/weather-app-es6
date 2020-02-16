class Forecast{
    constructor(){
        this.key = 'viJBiDqSCQjqgeC2GMvA3pARF7ARP1Sz';
        this. weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI =  'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets, weather};
    };

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const respone = await fetch(this.cityURI + query);
        const data = await respone.json();
        return data[0];
    }
        async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}








// // Current conditions (weather) info
// const getWeather = async (id) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

//     const query = `${id}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// };

// // Get city info
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

//     const query = `?apikey=${key}&q=${city}`;

//     const respone = await fetch(base + query);
//     const data = await respone.json();

//     return data[0];
// };

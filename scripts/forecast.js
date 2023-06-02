const key = 'ONOTRuy7844GegIbdBI1zsEAeG2Vp9rA'

// city search
'http://dataservice.accuweather.com/locations/v1/cities/search'
// current condition
'http://dataservice.accuweather.com/currentconditions/v1/{locationKey}'

// Get Weather Information
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// Get City Information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// getCity('manchester').then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

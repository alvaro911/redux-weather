/********** Strategy ***********
1. input name of city
2. name of the city
2. weather condition
3. weather temperature
4. weather icon
 *******************************/

const initialState = {
 cityName: '',
 weatherCon: '',
 temp: '',
 icon: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CITY_FOUND':
      return {
        ...state,
        cityName: action.payload.name,
        weatherCon: action.payload.weather[0].description,
        temp: action.payload.main.temp,
        icon: action.payload.weather[0].icon,
      };
    default:
      return state;
  }
};

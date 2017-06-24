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
        cityName: action.cityName,
        weatherCon: action.weatherCon,
        temp: action.temp,
        icon: action.icon,
      };
    default:
      return state;
  }
};

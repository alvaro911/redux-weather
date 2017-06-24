import axios from 'axios'

export const getCity = city => {
  return dispatch => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&units=imperial`)
      .then(res => {
        dispatch({
          type: 'CITY_FOUND',
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: 'ERROR',
          error: err,
        })
      })
  }
}

import * as WeatherTypes from '../../common/model/weather';

function http<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return (response.json() as Promise<T>);
      })
}

export default {
    getWeather: () => {
        return http<WeatherTypes.WeatherJSResult>('http://localhost:5000/api/weather')
    }
}
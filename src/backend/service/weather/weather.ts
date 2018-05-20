const WeatherJS = require('weather-js');

import { WeatherJSResult, WeatherJSReport } from '../../../common/model/weather';

export { WeatherJSReport };

export default class Weather {

    public getTodaysWeather(): Promise<WeatherJSReport> {

        const get = new Promise<WeatherJSReport>((accept: any, reject: any) => {
    
            WeatherJS.find({
                search: "Hebburn, UK",
                degreeType: "C"
            }, function(err: any, result: Array<WeatherJSResult>) {
                if (err) {
                    console.error("Failed to getTodaysWeather");
                    reject(err.message);
                    return;                    
                }
    
                result[0].forecast = result[0].forecast.splice(1, 3);
                result[0].forecast[0].shortday = "Today";
                result[0].forecast[1].shortday = "Tomorrow";
    
                accept(result[0]);
            });
        });
    
        return get;
    }    
};

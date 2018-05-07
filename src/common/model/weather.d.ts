
export type WeatherJSReport = {
    date: Date,
    day: string,
    feelslike: string,
    humidity: string,
    imageUrl: string,
    observationpoint: string,
    observationtime: string,
    shortday: string,
    skycode: string,
    skytext: string,
    temperature: string,
    winddisplay: string,
    windspeed: string
};

export type WeatherJSLocation = {

};

export type WeatherJSResult = {
    current: WeatherJSReport,
    forecast: Array<WeatherJSReport>
    location: WeatherJSLocation
};
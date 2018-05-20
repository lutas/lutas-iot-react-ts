import express from 'express';
import path from 'path';
import cors from 'cors';
import Config from '../common/config';

import Weather, { WeatherJSReport } from './service/weather/weather';
import Lights, { LightInfo } from './service/lights/lights';
import PhilipsLight from './service/lights/philips-light';

// setup 
const weather = new Weather();
const lights = new Lights([
    new LightInfo(2, "Living Room"),
    new LightInfo(1, "Our bedroom"),
    new LightInfo(3, "Office"),
    new LightInfo(4, "Downstairs toilet"),
    new LightInfo(5, "Landing"),
    new LightInfo(6, "Ada's bedroom"),
    new LightInfo(7, "Porch")
]);

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/api/weather', (req, res) => {
    req;

    weather.getTodaysWeather().then((result: WeatherJSReport) => {
        res.send(result);
    });
});

app.get('/api/light', (req, res) => {
    req;

    lights.getInfo().then(result => {
        const data: string = JSON.stringify(result);
        res.status(200).send(data);   
    });
});

app.get('/api/light/:lightId', (req, res) => {

    const lightId = Number(req.params.lightId);

    const light: PhilipsLight | null = lights.get(lightId);
    if (light == null) {
        res.status(401);
        return;
    }
    
    light!.isOn().then(status => {

        res.send(JSON.stringify(status, null, 4));
    }, (err) => {
        res.send(err.message);
    });
});

app.get('/api/light/:lightId/on', (req, res) => {

    const lightId = Number(req.params.lightId);

    const light: PhilipsLight | null = lights.get(lightId);
    if (light == null) {
        res.status(401);
        return;
    }
    
    light.on();   

    res.status(200).send('on');
});

app.get('/api/light/:lightId/off', (req, res) => {

    const lightId = Number(req.params.lightId);

    const light: PhilipsLight | null = lights.get(lightId);
    if (light == null) {
        res.status(401);
        return;
    }
    
    light.off();   

    res.status(200).send('off');
});

app.get('/', (req, res) => {
    req;
    res.write('Hello');
    res.send(200);
});

app.listen(Config.port, () => {
    console.info('Started Lutas IOT React on port', Config.port);
});

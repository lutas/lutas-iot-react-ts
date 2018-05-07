import express from 'express';
import path from 'path';
import Config from '../common/config';

let app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.all('/api', (req, res, next) => {
    res;
    req.url = req.url.replace('/api', '');
    next('route');
});

app.get('/', (req, res) => {
    req;
    res.write('Hello');
    res.send(200);
});

app.listen(Config.port, () => {
    console.info('Started Lutas IOT React on port', Config.port);
});

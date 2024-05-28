const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

require('dotenv').config();

const app = express();

const dataIntegrasiRoute = require('./routes/data-integrasi.route');
const pasienRoute = require('./routes/pasien.route');
const fasyankesRoute = require('./routes/fasyankes.route');
const lansiaRoute = require('./routes/lansiaPemeriksaan.route');
const balitaRoute = require('./routes/balitaPemeriksaan.route');

app.use(bodyParser.json());

//Routes
app.get('/api', (req, res) => {
    res.json({
        message: 'see full documentation',
        documentation_url: 'https://github.com/tantowish/syncpos-be/tree/main/docs'
    });
});
app.use('/api/data-integrasi', dataIntegrasiRoute);
app.use('/api/patient', pasienRoute);
app.use('/api/fasyankes', fasyankesRoute);
app.use('/api/checkup/lansia', lansiaRoute);
app.use('/api/checkup/balita', balitaRoute);

// External route
app.use('/api/syncpos/patient', pasienRoute);
app.use('/api/syncpos/checkup/lansia', lansiaRoute);
app.use('/api/syncpos/checkup/balita', balitaRoute);

//Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app
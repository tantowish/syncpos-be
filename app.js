const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

const authRoute = require('./routes/auth.route');
const dataIntegrasiRoute = require('./routes/data-integrasi.route');
const pasienRoute = require('./routes/pasien.route');
const fasyankesRoute = require('./routes/fasyankes.route');
const lansiaRoute = require('./routes/lansiaPemeriksaan.route');
const balitaRoute = require('./routes/balitaPemeriksaan.route');

app.use(bodyParser.json());

//Static for images
app.use('/uploads', express.static('uploads'));
//Routes
app.use('/api/auth', authRoute);
app.use('/api/data-integrasi', dataIntegrasiRoute);
app.use('/api/patient', pasienRoute);
app.use('/api/fasyankes', fasyankesRoute);
app.use('/api/checkup/lansia', lansiaRoute);
app.use('/api/checkup/balita', balitaRoute);

//Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app
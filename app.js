const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

const authRoute = require('./routes/auth.route');

app.use(bodyParser.json());

//Static for images
app.use('/uploads', express.static('uploads'));
//Routes
app.use('/api/auth', authRoute);

//Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app
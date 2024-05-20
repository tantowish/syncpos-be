const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();

const postRoute = require('./routes/post');
const userRoute = require('./routes/user');
const commentRoute = require('./routes/commentRouter');
const categoryRoute = require('./routes/categoryRouter');
const imageRoute = require('./routes/image');

app.use(bodyParser.json());

//Static for images
app.use('/uploads', express.static('uploads'));
//Routes
app.use('/posts', postRoute);
app.use('/auth', userRoute);
app.use('/comments', commentRoute);
app.use('/categories', categoryRoute);
app.use('/images', imageRoute);
//Documentation
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app
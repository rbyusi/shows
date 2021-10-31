const express = require('express');
const cors = require('cors');
const app = express();

const jsonErrorHandler = require('./middleware/jsonErrorHandler');

const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(jsonErrorHandler);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

//Routes
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`App running on ${process.env.NODE_ENV} and listening at port ${PORT}`);
});
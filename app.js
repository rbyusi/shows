const express = require('express');
const app = express();
const jsonErrorHandler = require('./middleware/jsonErrorHandler');

const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(jsonErrorHandler);

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};

//Routes
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
    console.log(`App running on ${process.env.NODE_ENV} and listening at http://localhost:${PORT}`);
});
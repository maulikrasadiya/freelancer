const express = require('express');
const connectDB = require('./database/database');
const userRoute = require('./routes/userRoute');
const projectRoute = require('./routes/projectRoute');
const paymentRoute = require('./routes/paymentRoute');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/', userRoute);
app.use('/project', projectRoute);
app.use('/payment', paymentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

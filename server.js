import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';

import {v4 as uuid} from 'uuid'

import { connection } from './database/db.js';
import defaultData from './defaultData.js';
import Routes from './routes/route.js';



// const router = require('./routes/route.cjs')

dotenv.config();
const app = express();

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;






connection(USERNAME, PASSWORD );



app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
defaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '15000',
paytmParams['CALLBACK_URL'] = 'callback'
paytmParams['EMAIL'] = 'aveshsingh601@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'
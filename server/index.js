import express from 'express';
import path from 'path';
import parser from 'body-parser';
import db from './db';
import router from './routes';
import bcrypt from 'bcryptjs';
import passport from 'passport';

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(3000, err => {
    if(err) {
        console.log('error connecting to port..')
    }
    else {
        console.log('connected to port 3000')
    }
})
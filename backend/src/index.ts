import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/router';
import logger from '../helpers/logger';

const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use(router);

const PORT = 3000;

//@ts-ignore
app.listen(PORT, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is listening on ${PORT}`);
});

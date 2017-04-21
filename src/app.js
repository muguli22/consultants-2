import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import database from './config/database';

const app = express();

const configureExpress = () => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    /**
     * All requisitions will be administrate by routes index
     */
    app.use('/', routes);
    return app;
};
/**
 * Pattern chained promises
 */
export default () => database.connect().then(configureExpress);

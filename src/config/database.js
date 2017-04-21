import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const mongodbURL = process.env.MONGODB_URL || 'mongodb://ramon:ramon@ds159330.mlab.com:59330/consultant';

const connect = () => mongoose.connect(mongodbURL);

export default {
    connect
}
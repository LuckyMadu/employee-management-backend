const mongoose = require('mongoose');

/**
 * Database connection
 * @returns {Promise<void>}
 */
const connectDB = async () => {
    try {
        // construct the db connection uri
        const connectionURI = `${process.env.DB_PREFIX}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;
        // Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7.
        mongoose.set("strictQuery", false);
        // connect to the mongodb database
        await mongoose.connect(connectionURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('******* DB connected *****');
    } catch (error) {
        // log the database error
        console.log('database error', error)
    }
};

export default connectDB;

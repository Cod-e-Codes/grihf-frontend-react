const mongoose = require('mongoose');
const mongoURI = "mongodb://root:ld3Un4qRgbf5uYNG6pTRabMS@172.21.69.133:27017";

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        // Connect to MongoDB using mongoose
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1' });
        console.info('Connected to MongoDB Successfully');
        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`);

        return await connectToMongo(nextRetryCount);
    }
};

module.exports = connectToMongo;

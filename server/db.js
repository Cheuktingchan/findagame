const DB_DSN = require("./config").DB_DSN;
const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(DB_DSN, connectionParams); // where DB is env variable of the database URL can be found on cluster site
        console.log("Connected to DB success");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to DB");
    }
}

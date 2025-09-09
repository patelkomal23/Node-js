const { default: mongoose } = require("mongoose");

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://patelkomal2332:12345@cluster0.wg4ajfg.mongodb.net/passport-adminPanel')
        console.log("datbase connected");

    } catch (err) {
        console.log(err.message);


    }
}
module.exports = db;
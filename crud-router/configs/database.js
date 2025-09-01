
const { default: mongoose } = require("mongoose");

const db = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://patelkomal2332:12345@cluster0.wg4ajfg.mongodb.net/product')
        console.log("Database connected..")
    } catch (error) {
        console.log(error)
    }
}

module.exports = db;

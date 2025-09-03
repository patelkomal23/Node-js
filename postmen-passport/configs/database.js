const { default: mongoose } = require("mongoose")

const db=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://patelkomal2332:12345@cluster0.wg4ajfg.mongodb.net/passport');
        console.log("Database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}
module.exports =db;
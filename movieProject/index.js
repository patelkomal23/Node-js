import express from "express";
import dotenv from "./config/dotenv.js";
import router from "./routers/index.js";

const port = dotenv.PORT || 3000
const app = express();
app.set("view engine", "ejs")
app.use(express.static('public'))

app.use('/',router)

app.listen(port, (err) => {
    if (!err) {
        console.log("Serve Stared");
        console.log("http://localhost:"+port);
    }

})
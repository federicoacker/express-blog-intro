import express from "express";
import cors from "cors";
import blogs from "./data/blogs.js";

const app = express();
const SERVER_URL = process.env.SERVER_URL;
const SERVER_PORT = process.env.SERVER_PORT;
const PROTOCOL = "http://";
const PRE_LOADED_DATA = blogs.map(element => ({
    ...element,
    img:`${PROTOCOL}${SERVER_URL}:${SERVER_PORT}/${element.img}`
}));

app.use(cors());

app.use(express.static("public/imgs", {index:false}));

app.get("/", (request, response) => {
    response.json({
        html:"Server del mio blog"
    }); //Semplice response in html che è il type di default
})

app.get("/bacheca", (request, response) => {
    response.json(PRE_LOADED_DATA);
})

app.listen(SERVER_PORT, (error) => {
    if(error){
        console.error(error);
    }
    else {
        console.log(`Server listening on ${SERVER_URL}:${SERVER_PORT}`);
    }
})
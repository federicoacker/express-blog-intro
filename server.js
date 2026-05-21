import express from "express";

const app = express();
const SERVER_URL = process.env.SERVER_URL;
const SERVER_PORT = process.env.SERVER_PORT;
const PROTOCOL = "http://";
app.use(express.static("public/imgs"));

app.get("/", (request, response) => {
    response.send("<h1>Server del mio blog</h1>"); //Semplice response in html che è il type di default
})

app.get("/bacheca", (request, response) => {

})

app.listen(SERVER_PORT, (error) => {
    if(error){
        console.error(error);
    }
    else {
        console.log(`Server listening on ${SERVER_URL}:${SERVER_PORT}`);
    }
})
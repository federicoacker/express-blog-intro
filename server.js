import express from "express";

const app = express();
const SERVER_URL = process.env.SERVER_URL;
const SERVER_PORT = process.env.SERVER_PORT;


app.listen(SERVER_PORT, (error) => {
    if(error){
        console.error(error);
    }
    else {
        console.log(`Server listening on ${SERVER_URL}:${SERVER_PORT}`);
    }
})
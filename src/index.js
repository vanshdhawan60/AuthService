const express = require('express');
const {PORT} = require('./config/serverConfig');

const app = express();

const prepareAndStart = () => {
    app.listen(PORT, () => {
        console.log("Server started at port:", PORT);
    })
}
 
prepareAndStart();
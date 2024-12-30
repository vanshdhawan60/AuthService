const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prepareAndStart = () => {

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        console.log("Server started at port:", PORT);
    })
}
 
prepareAndStart();
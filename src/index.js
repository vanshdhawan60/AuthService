const express = require('express');
const {PORT, DB_SYNC} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const db = require('./models/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prepareAndStart = () => {

    app.use('/api', apiRoutes);

    app.listen(PORT, () => {
        if (DB_SYNC) db.sequelize.sync({alter: true});
        console.log("Server started at port:", PORT);
    })
}
 
prepareAndStart();
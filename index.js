const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models').sequelize;
const instituteRoutes = require('./routes/instituteRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', instituteRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Institute API');
});

sequelize.sync().then(() => {
    console.log('Database & tables created!');
    app.listen(3000, () => {
        console.log(`Server is running on port 3000}`);
    });
}).catch(err => {
    console.log('Error while creating tables', err);
});

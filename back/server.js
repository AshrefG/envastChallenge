const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/auth');
const ticketRoutes = require('./routes/ticket');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log("Database Connected !");
    })
    .catch((err) => {
        console.log("Erreur", err);
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

app.use('/client', userRoutes);
app.use('/tickets', ticketRoutes);

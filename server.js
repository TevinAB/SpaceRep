const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const PORT = process.env.PORT || 5000;
const db = config.get('mongoURI');

//Allows access to json with Post requests
app.use(express.json());

//Add the routes
app.use('/api/items', require('./routes/api/items'));

//Connect to the database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((err) => console.log(err));

//Start server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

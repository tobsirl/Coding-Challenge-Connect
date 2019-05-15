const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const gameRoute = require('./routes/game');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// parse application/json
app.use(bodyParser.json());

app.use(gameRoute);

app.listen(3000, () => console.log(`Server started on 3000`));

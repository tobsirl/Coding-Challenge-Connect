import express from 'express';
const app = express();

import routes from './routes/connect';

// Add routes
app.use('/users', routes);

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(3000, () => console.log(`Server started on 3000`));

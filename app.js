const express = require('express');

const app = express();

const log = (req, res, next) => {
  console.log('Logging...');
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
}

app.use(log);

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

app.get('/json', (req, res) => {
  res.json({title: 'Tarefa X', done: true});
})

app.listen(3001, () => {
  console.log('Servidor foi iniciado');
})

// npm install nodemon --save-dev
// npx nodemon app.js

// com script
// npm dev
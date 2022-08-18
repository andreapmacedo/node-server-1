const express = require('express');
// const checklistRouter = require('.src/routes/checklist');
const checklistRouter = require('./src/routes/checklist');

const app = express();
app.use(express.json());

// forma 1
// app.use(checklistRouter);
// forma 2
app.use('/checklists',checklistRouter);

app.listen(3001, () => {
  console.log('Servidor foi iniciado');
});
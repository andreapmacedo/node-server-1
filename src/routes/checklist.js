const express = require('express');

const router = express.Router();

// forma 1
// router.get('/checklists', (req, res) => {
//   console.log('Olá');
//   res.send();
// })
// forma 2
router.get('/', (req, res) => {
  console.log('Olá');
  res.send();
})

module.exports = router;
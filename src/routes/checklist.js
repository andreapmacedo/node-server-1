const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
  // res.status(200).json(req.body); // enviando no formato json
})
module.exports = router;
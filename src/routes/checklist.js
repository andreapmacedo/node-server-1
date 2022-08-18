const express = require('express');

const router = express.Router();

router.put('/:id', (req, res) => {
  console.log(req.body);
  res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
  console.log(req.body);
  res.send(`DELETE ID: ${req.params.id}`);
})


module.exports = router;
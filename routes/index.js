const express = require('express');
const router = express.Router();

module.exports = () => {

  /* GET home page. */
  router.get('/', (req, res) => {
    res.render('index.html', {
      title: 'Registeration form'
    })
  })

  return router;
}
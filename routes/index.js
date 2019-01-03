const express = require ('express');
const controller = require('../controllers/index');

const router = express.Router();

  router.route('/api/v1/questions')
  .post(controller.createQuestion);

module.exports = router;
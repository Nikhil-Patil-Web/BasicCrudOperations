const express = require('express');

const router = express.Router();

const dataController = require('./controller')

router
  .route('/')
  .post(dataController.createDataSets)
  .get(dataController.getAllDataSets)
 

router
  .route('/:id')
  .get(dataController.getDataSet)
  .patch(dataController.updateData)
  .delete(dataController.deleteData)


module.exports = router;
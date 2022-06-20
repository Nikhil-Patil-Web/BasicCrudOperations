const Data = require('./model');

exports.getAllDataSets= async (req, res) =>{
    try{
     const dataSets = await Data.find()
     res.status(200).json({
        status: 'success',
        results: dataSets.length,
        data:{
             dataSets,
            },
    });
    }catch(err){
        res.status(400).json({
           status: 'fail',
            message: err,
        });
    }
}

exports.createDataSets = async (req, res) =>{
    try{
        const newDataSet = await Data.create(req.body);
  
        res.status(201).json({
          status: 'success',
           dataDetails: {
            data: newDataSet,
          },
        });
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err,
          });
    }
}

exports.getDataSet = async(req, res) =>{
    try{
        const dataSet = await Data.findById(req.params.id);
        res.status(201).json({
            status: 'success',
             dataDetails: {
              data: dataSet,
            },
          });
        }catch(err){
            res.status(400).json({
                status: 'fail',
                message: err,
            });
}};


exports.updateData = async (req, res) => {
    try {
      const data = await Data.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        dataDetails: {
          data
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };
  
exports.deleteData = async (req, res) => {
    try {
      await Data.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };







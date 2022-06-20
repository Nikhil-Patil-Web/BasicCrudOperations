const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nameOfImage:{
        type: String,
        required: [true, 'Please mention the name of the image']
    },
    image:{
        type: String,
        required: [true, 'Please enter the proper link for the image']
    },
    nameOfVideo:{
        type:String,
        required:[true, 'Please mention the name of the image']
    },
    video:{
        type: String,
        required:[true, 'Please enter the proper link of the video']
    }
})


const Data = mongoose.model('Data', dataSchema);

module.exports = Data;




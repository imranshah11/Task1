const mongoose = require('mongoose');


const PropertyDetailSchema = new mongoose.Schema({
    HouseNo: {
        type: Number,
        required: true
    },
    OwnerName:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    NoOfFloor:{
        type: Number,
        required: true
    },
    NoOfRooms:{
        type: Number,
        required: true
    },
    MobileNo:{
        type: Number,
        required: true
    }
});

const PropertyDetail = mongoose.model('PropertyDetail', PropertyDetailSchema);

module.exports = PropertyDetail;
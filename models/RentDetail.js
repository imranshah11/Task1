const mongoose = require('mongoose');


const RentDetailSchema = new mongoose.Schema({
    PropertyNo: {
        type: Number,
        required: true
    },
    PropertyName: {
        type: String,
        required: true
    },
    TenantName:{
        type: String ,
        required: true
    },
    MonthlyRent:{
        type: Number,
        required: true
    },
    TenantMobileNo:{
        type: Number,
        required: true
    },
    AgreementStartDate:{
        type: Number,
        required: true
    },
    AgreementExpiryDate:{
        type: Number,
        required: true
    }
});

const RentDetail = mongoose.model('RentDetail', RentDetailSchema);

module.exports = RentDetail;
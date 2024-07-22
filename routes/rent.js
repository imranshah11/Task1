const express = require('express');
const router = express.Router();
const RentDetail = require('../models/RentDetail');

router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newrent = new RentDetail(data);
        // Save the person to MongoDB
        const response = await newrent.save();
        console.log("data saved")
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await RentDetail.find()
        console.log("data fetched")
        res.status(200).json(data)

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});

//update record
router.put('/:id', async (req, res) => {
    try {
        const RentId = req.params.id;
        const updateRentdata = req.body;
        const response = await RentDetail.findByIdAndUpdate(RentId,updateRentdata,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.json(404).json({ err: "Rent not found" })
        }
        console.log("data updated")
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});


//delete record
router.delete('/:id', async (req, res) => {
    try {
        const RentId = req.params.id;
        const response = await RentDetail.findByIdAndDelete(RentId)

        if(!response){
            return res.json(404).json({ err: "rent not found" })
        }
        console.log("data deleted")
        res.status(200).json({message: 'rent deleted successfully'})

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});


module.exports=router
const express = require('express');
const router = express.Router();
const property = require('../models/propertyDetail');

router.post('/', async (req, res) => {
    const data = req.body;
    try {
        const newproperty = new property(data);
        // Save the person to MongoDB
        const response = await newproperty.save();
        console.log("data saved")
        res.status(200).json(response)

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await property.find()
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
        const propertyId = req.params.id;
        const updatePropertydata = req.body;
        const response = await property.findByIdAndUpdate(propertyId,updatePropertydata,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.json(404).json({ err: "property not found" })
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
        const PropertyId = req.params.id;
        const response = await property.findByIdAndDelete(PropertyId)

        if(!response){
            return res.json(404).json({ err: "property not found" })
        }
        console.log("data deleted")
        res.status(200).json({message: 'property deleted successfully'})

    } catch (err) {
        console.log(err)
        res.status(500).json({ err: "internal server error" });
    }
});


module.exports=router
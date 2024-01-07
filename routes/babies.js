const router = require("express").Router();
const Babies = require("../models/babies");

router.get("/", async (req, res) =>{
    try {
        const data = await Babies.find().sort({birthday: -1});
        res.status(200).json(data);
    } catch (error) {
        
    }
})
router.post("/", async (req, res) => {
    const newBaby = new Babies(req.body);

    try {
        const saveBaby = await newBaby.save();
        res.status(201).json(saveBaby);
    } catch (error) {
        res.status(500).json(error)
        
    }
})

module.exports = router
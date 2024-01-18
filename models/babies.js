const mongoose = require("mongoose");

const BabyScheama = new mongoose.Schema(
    {
       name: {type: String},
       birthday: {type:String},
       mother: {type:String},
       address:{type:String}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Babies", BabyScheama);


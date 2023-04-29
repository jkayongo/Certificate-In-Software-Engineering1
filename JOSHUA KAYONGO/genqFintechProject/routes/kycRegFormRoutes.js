const express = require("express");
const router = express.Router();



router.get("/kycRegForm",(req,res)=>{
    res.render("kycRegForm")
})
module.exports = router
const express = require('express');
const app = express();
const path = require("path")
const router = express.Router();
const kycRegFormRoutes = require("./routes/kycRegFormRoutes")
const config = require("./config/database")
const mongoose = require("mongoose")
mongoose.connect(config.database, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.once("open", ()=>{
    console.log("connected to db")
})
db.on("error", (err)=>{
    console.error(err)
})

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))
// app.get('/', (req, res) => { // new
//     res.send('Homepage! Hello world.');
//   });
app.use("/", kycRegFormRoutes)
app.use(express.static(path.join(__dirname, "public")))






app.listen(3000, () => console.log('listening on port 3000'));
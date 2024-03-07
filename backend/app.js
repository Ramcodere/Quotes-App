

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const quotesRoutes = require('./apis/quotesRoutes')
const seedDB = require("./seed");
const cors = require('cors');


mongoose
.connect('mongodb://127.0.0.1:27017/gian')
.then(function () {
    console.log("DB CONNECTED");
})

.catch((err) => {
    console.log("Error in DB", err);
});

// app.use(cors()); //Es midleware se kisi bhi ports se request aa jay ye chal dega Ex. 8080,5050,3000. Bhagr cros error ke

app.use(
    cors({
        origin: ["http://localhost:5173"], //esmai origin dalne se ye sirf 5173 port se acces ke sakega or ye dalna jaruri rheta hai
    })
    
    );

app.use(express.json()); 
// Middleware to parse JSON in request body
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.status(200).json({ msg: "welcome to backend"});
});

app.use(quotesRoutes);

// seedDB();

const PORT = 8080;
app.listen(PORT , ()=>{
console.log(`backend server connected at port: ${PORT}`);
});
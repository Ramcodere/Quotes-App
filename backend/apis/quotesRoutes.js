const express = require('express');
const { model } = require('mongoose');
const Quotes = require('../models/Quote');
const router = express.Router();

router.get('/allquotes',async (req,res)=>{
    try{
         let allQuotes = await Quotes.find({});
         res.status(200).json(allQuotes);
    }   catch(e) {
         res.status(400).json({ msg: "Something went Wrong.."});
    }
});

router.post('/addquotes', async (req,res)=>{
     try{
         let { author , text } = req.body;
         let newQuote =  await Quotes.create({ author , text});
         console.log(newQuote,"newQuote");
         res.status(201).json({ msg: "New quotes created succesaafuly"});
        }  catch(e){
         res.status(400).json({ msg: "Something went Wrong.."});
        
    }
});

//View full quote ko tick karne ke liye ek route bana hoga
// ⬇️
router.get("/quotes/:id", async (req, res) => {
     let quote = await Quotes.findById(req.params.id);
     res.status(200).json(quote);
});

module.exports = router;
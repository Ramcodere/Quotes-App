
const mongoose = require('mongoose');
const Quotes = require("./models/Quote");

let dummyArray = [
    {
        author: "Theodore Roosevelt",
        text: "Believe you can and you're halfway there",
    },
    {
        author: "Steve Jobs",
        text: "The only way to do great work is to love what you do",
    },
    {
        author: "Ram kushram",
        text: "In the end, we only regret the chances we didn't take",
    },
    {
        author: "Dalai Lama",
        text: "Happiness is not something ready-made. It comes from your own actions",
    },

];

async function seedDB() {
    await Quotes.insertMany(dummyArray);
    console.log("DB SEEDED WITH DATA 😊")
}

module.exports = seedDB;
const mongoose = require('mongoose');

let quotesSchema = new mongoose.Schema({
    author: {
        type: String,
        trim: true,
        required: true,
    },
    text: {
        type: String,
        trim: true,
        required: true,
    },
});

const Quotes = mongoose.model("Quote", quotesSchema);
module.exports = Quotes;

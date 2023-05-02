const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
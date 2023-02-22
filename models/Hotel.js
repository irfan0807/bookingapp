import mongoose from "mongoose";
const { schema } = mongoose;

const HotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    photos: {
        type: [String],

    },
    descriptions: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],

    },
    cheapestPrice: {
        type: Number,
        required: true
    },
    features: {
        type: Boolean,
        default: false
    },

})

export default mongoose.model("Hotel", HotelSchema);
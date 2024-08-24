import mongoose from 'mongoose'

const BlockSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: false,
        // unique: true
    },
    title_ES: {
        type: String,
        // required: false,
        // unique: true
    },
    description: {
        type: String,
        // required: false
    },
    description_ES: {
        type: String,
        // required: false
    },
    similar: {
        type: String,
        // required: false
    },
    categories: {
        type: Array,
        // required: true
    },
    tags: {
        type: Array,
        // required: true
    },
    filters: {
        type: Array,
        // required: true
    },
    img: {
        type: String,
        // required: true
    },
    videos: {
        type: Array
    },
    dwg: {
        type: String,
        // required: true
    },
    date: {
        type: Number,
        // required: true
    },
    downloads: {
        type: Number,
        // required: false
    },
    free: {
        type: Boolean,
        // required: false
    },
    price: {
        type: Number
    },
    urlStripe: {
        type: String,
        // required: true
    },
    urlDownloadBlock: {
        type: String,
        // required: true
    },
    codePremiumBlock: {
        type: String,
        // required: true
    }
})

export default mongoose.models.Block || mongoose.model('Block', BlockSchema)
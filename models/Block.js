import mongoose from 'mongoose'

const BlockSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    filters: {
        type: Array,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    dwg: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    downloads: {
        type: Number,
        required: false
    },
    free: {
        type: Boolean,
        required: false
    }
})

export default mongoose.models.Block || mongoose.model('Block', BlockSchema)
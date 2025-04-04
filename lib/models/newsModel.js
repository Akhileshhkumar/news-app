import mongoose from "mongoose";

// Subheading schema without image
const SubheadingSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true
    },
    subdescription: {
        type: String,
        required: true
    }
});

// Main news schema without author image
const newschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    subheadings: [SubheadingSchema], // Still supports multiple subheadings
    date: {
        type: Date,
        default: Date.now
    }
});

// Model export (reuses if already compiled)
const newsModel = mongoose.models.news || mongoose.model("news", newschema);

export default newsModel;

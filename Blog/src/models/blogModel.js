const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    "title": {
        type: String,
        required: true,
        trim: true
    },
    "description": {
        type: String,
        required: true,
        trim: true
    },
    "userId": {
        type: String,
        required: true,
        trim: true
    }
})

const BlogPost = new mongoose.model("BlogPost", blogSchema)
module.exports = BlogPost

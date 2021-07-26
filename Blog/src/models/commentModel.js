const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    "comment" : {
        type: String,
        required: true,
    },
    "usedId" : String,
    "blogId" : String
})

const Comment = new mongoose.model("Comment", commentSchema)
module.exports = Comment
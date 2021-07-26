const express = require("express")
const router = express.Router()

const Comment = require("../../models/blogModel")


router.get("/id/:blogId", async (req, res) => {
    try{
        const result = await Comment.find({"blogId" : req.params.blogId})
        res.send(result)
    }catch(error){
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try{
        const commentInstance = Comment(req.body)
        const result = await commentInstance.save()
        res.send(result)
    }catch(error){
        res.send(error)
    }
})

module.exports = router
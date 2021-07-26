const express = require("express")
const router = express.Router()

const BlogPost = require("../../models/blogModel")


router.get("/", async (req, res) => {
    try{
        const result = await BlogPost.find()
        res.send(result)
    }catch(error){
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try{
        const blogPostInstance = BlogPost(req.body)
        const result = await blogPostInstance.save()
        res.send(result)
    }catch(error){
        res.send(error)
    }
})

router.get("/id/:blogId", async (req, res) => {
    try{
        const result = await BlogPost.find({"_id": req.params.blogId})
        res.send(result[0])
    }catch(error){
        res.send(error)
    }
})

module.exports = router
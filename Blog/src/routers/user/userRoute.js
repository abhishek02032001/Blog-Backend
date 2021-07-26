const express = require("express")
const app = express()
const router = express.Router()


const User = require("../../models/userModel")

router.get("/", async (req, res) => {
    try{
        const result = await User.find()
        res.send(result)
    }catch(error){
        res.send(error)
    }
})

router.post("/", async (req, res) => {
    try{
        console.log(req.body)
        const userInstance = new User(req.body)
        const result = await userInstance.save()
        res.send(result)
    }catch(e){
        res.send(e);
    }
})

router.get("/id/:userId", async (req, res) =>{
    try{
        const askedUser = await User.find({"_id": req.params.userId})
        res.status(200).send(askedUser[0])
    }catch(error){
        res.send(error)
    }
})


module.exports = router
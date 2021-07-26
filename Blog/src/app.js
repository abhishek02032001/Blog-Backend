const express = require("express")
const app = express()

const port = process.env.PORT || 3000

// Database Connection
require("../src/db/connection")

app.use(express.json());
app.use(express.urlencoded());

const userRoute = require("../src/routers/user/userRoute")
const blogRoute = require("../src/routers/blog/blogRoute")
const commentRoute = require("../src/routers/comment/commentRoute")

app.use('/user', userRoute)
app.use('/blog', blogRoute)
app.use('/comment', commentRoute)





//Listening to the port
app.listen(port,  () => console.log(`Connection Established at port ${port}`))
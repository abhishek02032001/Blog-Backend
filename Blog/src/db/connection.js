const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Blog", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successful to database.")
}).catch((error) => {
    console.log(error)
})
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/userstest",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log("Unsuccessful");
    //console.log("err");
})

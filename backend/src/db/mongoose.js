const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(()=>{
    console.log("Connection Successful")
}).catch((err)=>{
    console.log("Unsuccessful");
    
})

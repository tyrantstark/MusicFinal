const express = require('express')
const path = require('path')
require('dotenv').config({ path: './.env'});
const  env  = require("process");


const userRouter = require('./routers/user')
const profileRouter = require('./routers/profile')
const songRouter = require('./routers/song')
const likeRouter = require('./routers/like')
const commentRouter = require('./routers/comment')
const messageRouter = require('./routers/message')
const conversationRouter = require('./routers/conversation')


const cors = require('cors')
const history = require('connect-history-api-fallback')


require('./db/mongoose')
const app = express()


app.use(history({
    disableDotRule: true,
    verbose: true,
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/../public/'))



    app.get('/.*/', (req, res) => {
        res.sendFile(__dirname + '/../public/index.html');
    });

} else {
    app.use(express.static(path.join(__dirname, '../frontend/public')))
    app.get('/.*/', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
    });


}

const port = process.env.PORT || 4000

app.use(cors())
app.options('*', cors())
app.use(express.json())
app.use(userRouter)
app.use(profileRouter)
app.use(songRouter)
app.use(likeRouter)
app.use(commentRouter)
app.use(messageRouter)
app.use(conversationRouter)

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
})
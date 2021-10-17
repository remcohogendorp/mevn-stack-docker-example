const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const cors = require('cors')


const corsOptions = {
    origin: process.env.FRONTEND_BASE_URL
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
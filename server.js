const path = require('path')

const express = require('express')
const app = express()

app.use(express.static('assets'))

app.use('/', (req,res)=>{ 
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use('/klyde',(req,res)=>{
    res.send("Hello I'm Klyde")
} )

const PORT = process.env.PORT || 9090
app.listen(PORT, ()=> console.log(`Listening to PORT ${PORT}`))


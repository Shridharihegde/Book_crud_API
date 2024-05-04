const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/Library'
const app=express()
mongoose.connect(url)
const con=mongoose.connection

con.on('open',function(){
    console.log('connected')
})

app.use(express.json())
const bookRouter=require('./routes/books')
app.use('/book',bookRouter)

app.listen(3000,function(){
    console.log('running at 3000')
})
const mongoose=require('mongoose')

const bookschema=new mongoose.Schema({
    name:{
       type: String,
    required:true
},
    category:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    }
    
})

module.exports=mongoose.model('book',bookschema)
const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
    sender : { type: mongoose.Schema.Types.ObjectId,ref : "User" },
    content : { type : String , trim  : true },
    content : { type : mongoose.Schema.Types.ObjectId ,  ref : "Chat"},
},
{
    timeStamps : true,
}
)
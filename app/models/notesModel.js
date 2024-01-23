const mongoose = require('mongoose');
const validator = require('validator');

const notesModel = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        required : [true, "UserID must be provided"]
    },
    title : {
        type : String,
    },
    description: {
        type: String,
        required : [true, "Description Cannot be Empty"]
    },
    isRead : {
        type : Boolean,
        default: false
    }
})

module.exports = mongoose.model('notesModel',notesModel);

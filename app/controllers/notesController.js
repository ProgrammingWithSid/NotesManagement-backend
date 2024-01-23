const Notes = require('mongoose').model('notesModel');
const { check } = require('express-validator');
const {handleValidationErrors} = require('../utils/validator')

 function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
 }


const getAllNotes = async(req,res,next) => {
    try {
        const requestData = req.body;

        const searchQuery = req.query.q || '';
        const sanitizedSearchQuery = escapeRegExp(searchQuery);

        const searchCriteria = {
            $or: [
                { title: { $regex: sanitizedSearchQuery, $options: 'i' } }, 
                // { description: { $regex: sanitizedSearchQuery, $options: 'i' } },
            ],
        };
   
        const notes = await Notes.find({ user: requestData.userID, ...searchCriteria });
        
        // console.log(notes)
        return res.status(200).json({
            "success":true,
            notes
        })
    } catch (error) {
        console.error('An error occurred:', error);
        next(error);
    }
}

const createNote = async(req,res,next) => {
    try {
        const requestData = req.body;

        const newNotes = await new Notes({
            title:requestData.title,
            description:requestData.description,
            user:requestData.userID
        })

        note = newNotes.save();
        if(!note) {
            return res.status(500).json({
                "success":false,
                "message":"Something Went Wrong. Please Try again later"
            })
        }

        return res.status(201).json({
            "success":true,
            "message":"Note Created Successfully",
            newNotes
        })

    } catch (error) {
        console.error('An error occurred:', error);
        next(error);
    }
}

const updateNote = async(req,res,next) =>{
    try {
        const requestData = req.body;

        const noteID = req.params.id;
        console.log((noteID));
        const note = await Notes.findOne({ _id: noteID, user: requestData.userID });

        if (!note) {
            return res.status(404).json({
                "success": false,
                "message": "Note not found",
            });
        }
        
        const updatedNote = await Notes.findByIdAndUpdate(noteID,
            {
            title :requestData.title,
            description:requestData.description 
        },{new:true})

        if(!updatedNote) {
            return res.status(404).json({
                "success":true,
                "message":"Note not Found"
            })
        }

        return res.status(200).json({
            "success":true,
            "message":"Note Updated Successfully",
            updatedNote
        })

    } catch (error) {
        console.error('An error occurred:', error);
        next(error);
    }
}

const deleteNote = async(req,res,next) => {
    try {
        const requestData = req.body;
        const noteID = req.params.id;

        const note = await Notes.findOne({ _id: noteID, user: requestData.userID });

        if (!note) {
            return res.status(404).json({
                "success": false,
                "message": "Note not found",
            });
        }

        const deletedNote = await Notes.findByIdAndDelete(noteID);

        if(!deletedNote) {
            return res.status(404).json({
                "success":true,
                "message":"Note Not Found",
                deletedNote
            })
        }
        return res.status(200).json({
            "success":true,
            "message":"Note Deleted Successfully"
        })

    } catch (error) {
        console.error('An error occurred:', error);
        next(error);
    }
}

const toggleRead = async(req,res,next) => {
    try {
        const requestData = req.body;
        const noteID = req.params.id;

        const noteRead = await Notes.findOne({_id: noteID, user: requestData.userID});

        if(!noteRead) {
            return res.status(404).json({
                "success":true,
                "message":"Note not Found"
            })
        }

        const updatedNote = await Notes.findByIdAndUpdate(noteID,
            { isRead: !noteRead.isRead },
            { new: true } // Returns the updated note
        );

        return res.status(200).json({
            "success":true,
            "message":"Updated Successfully",
            updatedNote
        })

    } catch (error) {
        console.error('An error occurred:', error);
        next(error);
    }
}

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
    toggleRead
}
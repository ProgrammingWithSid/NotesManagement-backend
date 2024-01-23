const express = require('express');
const {isAuthenticated } = require('../../config/middleware');
const router = express.Router();
const notesController = require('../controllers/notesController')
const {validateCreateNote, validateUpdateNote, handleParameter, handleValidationErrors} = require('../utils/validator')


router.get('/getAllNotes',isAuthenticated,notesController.getAllNotes);
router.post('/createNote',isAuthenticated,validateCreateNote,handleValidationErrors,notesController.createNote);
router.put('/updateNote/:id', isAuthenticated,handleParameter, validateUpdateNote,handleValidationErrors,notesController.updateNote);
router.delete('/deleteNote/:id',isAuthenticated,handleParameter,notesController.deleteNote);
router.put('/toggleNote/:id',isAuthenticated,handleParameter,notesController.toggleRead);

module.exports=router
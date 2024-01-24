const express = require ('express')
const Contact = require('../Models/Contact')
const { AddContact, GetContacts, DeleteContact, UpdateContact, GetOneContact } = require('../Controllers/Contact')

const contactRouter = express.Router()

//post = pour ajouter des choses 
 contactRouter.post('/addContact',AddContact)

contactRouter.get('/GetContacts',GetContacts) 

contactRouter.delete('/deleteContact/:id',DeleteContact) 

//put= update le contact 
contactRouter.put('/updateContact/:id',UpdateContact) 

contactRouter.get('/getOnecontact/:id', GetOneContact) 



module.exports = contactRouter 
const Contact = require("../Models/Contact")


exports.AddContact=async(req,res)=>{
    try {

       const found = await Contact.findOne({email: req.body.email})
// on définit une condition selon laquelle s'il y a un même mail il applique le if
    if(found){
        return res.status(400).send('Email already used')
    }

      
    const newContact = new Contact(req.body) 

       
        await newContact.save() 

        //tu ajoutes un nouveau contact, tu dois l'enregistrer 
 //tu mets le await ici parce que save prend du temps 

        res.status(200).send({Message : "contact added", newContact})

} catch (error) {

    res.status(500).send('can not add contact') 
}
 }




 exports.GetContacts=async(req,res)=>{

    try {

     const contacts = await Contact.find()
     //tu ramènes tes contacts 

     res.status(200).send({Message: "Contact List", contacts})
        
    } catch (error) {
        res.status(500).send ('could not get contacts')
    }

}


exports.DeleteContact=async(req,res)=>{

    try {

     const {id} = req.params 

      await Contact.findByIdAndDelete(id)
        //tu appliques plus de filtre juste cette fonction prédéfinie 

        res.status(200).send('Contact deleted') 

    } catch (error) {
        res.status(500).send ('contact not deleted')
    }

}


exports.UpdateContact=async(req,res)=>{
    try { 
    const {id} = req.params 
    //par rapport à la partie dynamique 

    await Contact.findByIdAndUpdate(id, {$set: req.body})
      //tu appliques plus de filtre juste cette fonction prédéfinie 

      res.status(200).send('Contact updated') 

  } catch (error) {
      res.status(500).send ('contact not updated')
  }
} 



exports.GetOneContact=async(req,res)=>{

    try {

        const {id} = req.params 

       const contactF = await Contact.findById(id) 
       //tu le caches dans une variable pour le retourner 

res.status(200).send({Message : "Contact found", contactF})
    } catch (error) {
        
        res.status(500).send('could not get one contact') 
    }
}








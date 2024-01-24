import { GETALLCONTACTS, GETONECONTACT } from "./ActionTypes"
import axios from "axios" 

export const getAllContacts=()=>async(dispatch)=>{
    try {
    const res = await axios.get('/api/contact/GetContacts')
 
    //dispatcher une action vers le reducer 
    dispatch(
       {
        type : GETALLCONTACTS, 
        payload : res.data.contacts 
       } 
    )
} catch (error) {
        console.log(error)
    }
}

export const addContact=(newUser,navigate)=>async(dispatch)=>{
    try {
       await axios.post('/api/contact/addContact',newUser) 
       dispatch(getAllContacts())

       navigate('/ListContact')
       
    } catch (error) {
        console.log(error) 
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
   try {
   const res = await axios.get(`/api/contact/getOneContact/${id}`)
   dispatch(
    {
        type: GETONECONTACT, 
        payload : res.data.contactF
    }
   )
} catch (error) {
    console.log(error)
   }
}

export const updateContact=(id,upUser,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`, upUser)
        dispatch(getAllContacts())

        navigate('/ListContact') 

    } catch (error) {
        console.log(error)
    }
}



export const deleteContact=(id)=>async(dispatch)=>{
    try {
        axios.delete(`/api/contact/deleteContact/${id}`)

        dispatch(getAllContacts())

    } catch (error) {
        console.log(error)
    }
} 

import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux" 
import { getAllContacts } from '../Redux/Actions'
import CardContact from './CardContact'

const ListContact=()=>{
    //pour envoyer une action dès l'ouverture de la liste

    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getAllContacts())  
    }) 

    const contacts = useSelector(state=>state.contacts) 

    return(
        <div>
          {
             contacts.map((el,i,t)=> <CardContact el={el}/>) 
          } 
        </div>
    )
}

export default ListContact 
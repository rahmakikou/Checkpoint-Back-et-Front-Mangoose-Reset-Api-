import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/Actions';
import {Link} from 'react-router-dom'
        
const CardContact=({el})=>{
  const dispatch= useDispatch()
    return( 
      <div className='carta'> 
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title style={{ color:"violet", fontSize:'35px'}}>{el.name}</Card.Title>
        <br/>
        <Card.Subtitle style={{ color:"pink", fontFamily:'fantasy', fontSize:'30px'}}>{el.age}</Card.Subtitle>
        <br/>
        <Card.Text style={{ color:"#DE5D83", fontFamily:'fantasy', fontSize:'20px'}}>
          {el.email} 
        </Card.Text>
        <div className='felsa'>
        <Card.Link as={Link} to={`/EditContact/${el._id}`} style={{color: '#FC6C85'}}>Edit</Card.Link>
        <Button variant='danger' onClick={()=>dispatch(deleteContact(el._id))}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
  ); 
         
        }
   

export default CardContact 
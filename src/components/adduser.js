import React from "react"; 
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action_creators";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Adduser(){
    const [stateuser,setstateuser]=useState({
        name:"",
        email:"",
        contact:"",
        address:""
    });
    const [error,seterror] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
/*const name = stateuser.name;
const email=stateuser.email;
const contact=stateuser.contact;
const address=stateuser.address;*/
    const {name,email,contact,address}=stateuser
    const handleInputChange = (event)=>{
        /*const name=event.target.name;
        const value=event.target.value;*/
        const {name,value} = event.target;  
        setstateuser({
            ...stateuser,
            [name]:value
        })  
    }
   const handleSubmit = (event)=>{
        event.preventDefault();
        if(!name || !email || !contact || !address ){
            seterror('Please Enter In All Fields');
        }else{
            dispatch(addUser(stateuser));
            navigate("/");
            seterror("");

        }
   }
    return(
        <div>
        <div>
        <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button color='secondary' style={{marginBottom:"15px"}} onClick={()=>navigate("/")}>GO Back</Button>
        </ButtonGroup>
        {error && (<h3 style={{color:'red'}}>{error}</h3>)}
        <form noValidate autoComplete='off' onSubmit={handleSubmit} >
        <TextField id="standard-basic" label="enter your name " variant="standard" name='name' value={name} onChange={handleInputChange}/><br/><br/>
        <TextField id="standard-basic" label="enter your email" variant="standard" name='email'value={email} onChange={handleInputChange}/><br/><br/>
        <TextField id="standard-basic" label="enter your contact" variant="standard" name='contact' value={contact} onChange={handleInputChange}/><br/><br/>
        <TextField id="standard-basic" label="enter your address" variant="standard" name='address' value={address} onChange={handleInputChange}/><br></br>
        <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button type='submit' color='primary' style={{marginTop:"5px"}}>Add User</Button>
        </ButtonGroup>
        </form>
        </div>
        </div>
        
    )
}
export default Adduser;
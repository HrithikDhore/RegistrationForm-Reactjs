import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { loadUsers,deleteUser } from "../redux/action_creators";
import {useSelector,useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function Home(){
    let dispatch=useDispatch();
    const {users} = useSelector((state)=>{return state.usersData});
    useEffect(()=>{
        dispatch(loadUsers());
    });

   const handleuserdelete=(id)=>{
            dispatch(deleteUser(id));
   }
   const navigate=useNavigate();
    return(
        
    <TableContainer component={Paper}>
<ButtonGroup variant="contained" aria-label="outlined button group">
<Button color='primary' style= {{marginBottom:"15px"}} onClick={()=>navigate("/adduser")}>Add User</Button>
</ButtonGroup>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
<TableHead>
<TableRow>
<TableCell>id</TableCell>
<TableCell align="right">Name</TableCell>
<TableCell align="right">Email</TableCell>
<TableCell align="right">Contact</TableCell>
<TableCell align="right">Address</TableCell>
<TableCell align="right" colSpan="2">Action</TableCell>
</TableRow>
</TableHead>
<TableBody>
{users.map((user) => (
<TableRow
key={user.id}
sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
<TableCell component="th" scope="row">
{user.id}
</TableCell>
<TableCell align="right">{user.name}</TableCell>
<TableCell align="right">{user.email}</TableCell>
<TableCell align="right">{user.contact}</TableCell>
<TableCell align="right">{user.address}</TableCell>
<TableCell align='right'>
<ButtonGroup variant="contained" aria-label="outlined button group">
<Button color='primary' style= {{marginRight:"5px"}} onClick={()=>navigate(`edituser/${user.id}`)}>Edit</Button>
<Button onClick={()=>handleuserdelete(user.id)}>Delete</Button>
</ButtonGroup>
</TableCell>
</TableRow>
))}
</TableBody>
</Table>
</TableContainer>
    )
}
export default Home;
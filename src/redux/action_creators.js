import * as types from './action_types';
import axios from 'axios';

export const userAdded=()=>{
    return {
        type:types.ADD_USER 

    }
}
export const getUser=(user)=>{
        return {
            type:types.GET_SINGLE_USER,
            payload:user
        }
}
export const userUpdated=()=>{
    return{
        type:types.UPDATE_USER

    }
} 
const userDeleted = (id)=>{
    return {
       types:types.DELETE_USER
    }
}


export const getUsers=(users)=>{
    return {
        type:types.GET_USERS,
        payload:users
    }
}

export const loadUsers=()=>{
    return function(dispatch){
    return axios.get('http://localhost:4444/users').then((response)=>{
        dispatch(getUsers(response.data))
    }).catch((error)=>{
        console.log(error)
    })
    }
    
}
export const deleteUser=(id)=>{
    return function(dispatch){
        axios.delete(`http://localhost:4444/users/${id}`).then(()=>{
            dispatch(userDeleted(id));
            dispatch(loadUsers());
        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const addUser=(user)=>{
    return function(dispatch){
        axios.post(`http://localhost:4444/users`,user).then(()=>{
            dispatch(userAdded());
        }).catch((error)=>{
            console.log(error);
        })
    }
}
export const getSingleUser=(id)=>{
    return function(dispatch){
        axios.get(`http://localhost:4444/users/${id}`).then((response)=>{
            dispatch(getUser(response.data));
        }).catch((error)=>{
            console.log(error);
        });

    }
}
export const updateUser=(user,id)=>{
    return function(dispatch){
            axios.put(`http://localhost:4444/users/${id}`,user).then(()=>{
                dispatch(userUpdated());
            }).catch((error)=>{
                console.log(error);
            });
    }
}

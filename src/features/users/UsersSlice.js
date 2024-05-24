import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const axiosFunc = async (u) =>{
    let url = initialState.baseUrl
    let res = await axios.put(url,{name:u.name ,password:u.password})
    alert(res.data.id)
    if(res.data.id)
    {initialState.status = 'connected'}
    // userOnline = res.data.id
    return res.data
}

const initialState = {
    userOnline:'-',
    baseUrl:'http://localhost:9000/users/',
    status:'not connected',
    // userOnline:localStorage.getItem('name')
    userOnline:{}
}

const UsersSlice = createSlice({
    name:'usersSlice',
    initialState,
    reducers: {
        updateUser: (state,action) =>{
            state.userOnline = {"name":"mazi","email":"mazi@gmail.com", "password":"0534113092"}
            console.log(action.payload.name)
            localStorage.setItem('name',action.payload.name)
            localStorage.setItem('profile',action.payload.profile)
        },
        checkUser: (state,action) =>{
            console.log(action.payload)
            const {name,password} = action.payload
            alert(name + ' ' + password)

            fetch(state.baseUrl +'check',{
                method:"put",
                body:{name,password}
            }).then(alert('kk'))
            // const {name, password} = action.payload
            // alert(name + ' ' + password)
                  let t = axiosFunc({name,password})
            //     if(t=='You entered successfully')
            // {
            //     state.status = 'connected'
            //     state.userOnline = action.payload.name
            //     alert(state.status)
            // }
            // else
            // alert(state.status)
            }
          
            
          },         
    })
    
    export const {checkUser,updateUser} = UsersSlice.actions
    export default UsersSlice.reducer
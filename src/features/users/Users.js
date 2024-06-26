import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch } from "react-redux"; 
import { updateUser } from "./UsersSlice";
    

export const SignIn = () => {
    let dispatch = useDispatch()
    const{register,handleSubmit, watch} = useForm()
    const checkUser = async() => {
        let name = watch("name")
        let password = watch("password")
        alert(name + ' ' + password)
      let url = 'http://localhost:9000/login/users/check'
      alert('j')
      const res = await axios.put("http://localhost:9000/login/users/check",{"name":name,"password":password})
          alert(res.data.token)
          localStorage.setItem("accessToken",res.data.token)
          // localStorage.setItem('name',res.data.user.name)
          dispatch(updateUser(res.data.user))
      }

        return (
            <div className="sign">
            <Typography color="secondary" variant="h4">sign In</Typography>
             <br/><br/>
             <form onSubmit={handleSubmit(checkUser)}>
            <TextField {...register("name", {required:true})} color="secondary" label="name"/><br/><br/><br/>
            <TextField {...register("password", {required:true})} color="secondary" label="password"/><br/><br/><br/><br/>
            <Tooltip   /*variant='standard'*/ title="Fill in all the fields" followCursor>
            <Button type='submit'color="secondary" variant="contained">sign In</Button></Tooltip><br/><br/>
            </form>
            </div>
    )}
   export const SignUp = () =>{
    let dispatch = useDispatch()
        const { register, handleSubmit,watch,setError, formState: { errors } } = useForm();
        const addUser = async () => {
          let name = watch("firstName")
          let email = watch("email")
          let password = watch("password")
          alert(name + ' ' + email + ' ' + password)
          const res = await axios.post("http://localhost:9000/signUp/users",{"name":name,"email":email , "password":password})
          alert(res.data.token)
          localStorage.setItem("accessToken",res.data.token)
          // localStorage.setItem('name',res.data.user.name)
          dispatch(updateUser(res.data.user))
          // localStorage.setItem("accessToken",res.data)
         };
      return(
          <>
           <div className="sign">
           <Typography color="secondary" variant="h4">sign Up</Typography>
           <br/><br/>
          <form onSubmit={handleSubmit(addUser)}>
          <TextField  {...register("firstName", { required: true ,maxLength: 15})} color="secondary" label="name"/>
          {errors.firstName && <p>to long words</p>}
          <br/><br/><br/><TextField  {...register("email", { required: true,pattern: /^\S+@\S+$/i})} color="secondary" label="email"/><br/><br/><br/><br/>
          <TextField  {...register("password", { required: true,minLength:8 })} color="secondary" label="password"/><br/><br/><br/><br/>
          {errors.password && <p>to short words!!!</p>}
          <Tooltip title="Fill in all the fields" followCursor>
          <Button type='submit' color="secondary" variant="contained">sign Up</Button></Tooltip><br/><br/>
          </form>
          </div>
          </>
      )
  
      }  
import { Button, TextField, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import '../style.css'

const signIn = () => {

  const{register,handleSubmit, watch} = useForm()
    
  const checkUser = async () =>{
    const name = watch("name")
    const password = watch("password")
    alert(name)
    alert(password)
    const res = await axios.put("http://localhost:9000/users/check",{"name":name , "password":password})
    alert(res.data)
  }
    return (
        <div className="sign">
        <Typography color="secondary" variant="h4">sign In</Typography>
         <br/><br/>
         <form onSubmit={handleSubmit(checkUser)}>
        <TextField /*variant='standard'*/ {...register("name", {required:true})} color="secondary" label="name"/><br/><br/><br/>
        <TextField /*variant='standard'*/ {...register("password", {required:true})} color="secondary" label="password"/><br/><br/><br/><br/>
        <Tooltip   /*variant='standard'*/ title="Fill in all the fields" followCursor>
        <Button type='submit'color="secondary" variant="contained">sign In</Button></Tooltip><br/><br/>
        </form>
        </div>
)}
export default signIn
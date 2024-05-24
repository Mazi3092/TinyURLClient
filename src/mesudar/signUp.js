import { Button, TextField, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import '../style.css'
import {useForm} from 'react-hook-form'
import { Search, SearchOff, StackedBarChartOutlined } from '@mui/icons-material';
// import GlobalVariableExample from './GlobalVariableExample';

const SignUp = () =>{
      const { register, handleSubmit,watch,setError, formState: { errors } } = useForm();
      const addUser = async () => {
        let name = watch("firstName")
        let email = watch("email")
        let password = watch("password")
        alert(name + ' ' + email + ' ' + password)
        const res = await axios.post("http://localhost:9000/users",{"name":name,"email":email , "password":password})
        alert(res.data)
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
export default SignUp
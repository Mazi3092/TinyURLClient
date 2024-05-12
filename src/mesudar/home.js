import React from 'react'
import { Button, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import EditIcon from '@mui/icons-material/Edit';
import '../style.css';
import axios from 'axios';
import { useForm } from 'react-hook-form'

const home = () =>{

    const baseUrl="http://localhost:9000/";

    const addLink = async () =>{
        let originalUrl = watch("originalUrl")
        let uniqueName = watch("uniqueName")
        alert(originalUrl + ' ' + uniqueName)
        const res = await axios.post(baseUrl + "links",{headers:{authorization: localStorage.getItem('accessToken')},"originalUrl":originalUrl , "uniqueName":uniqueName})
        alert(res.data)  
    }
  const{register,handleSubmit,watch,formState:{errors}}=useForm()

    return(
        <>
         <Typography color="secondary" variant="h4">home</Typography>
        <div className="addLink">
         <form onSubmit={handleSubmit(addLink)}>
        <AddLinkIcon/> Enter a long URL to make a TinyURL
        <TextField {...register("originalUrl",{required:true})} color="secondary" fullWidth label="originalUrl"/><br/><br/><br/>
        <EditIcon/> Customize your link<br/>
        <TextField {...register("uniqueName" ,{minLength:3,maxLength:15},{require:true})} color="secondary" label="uniqueName"/><br/>
        {errors.uniqueName && <p>between 3-15!!!</p>}
        <br/><br/><br/> <Tooltip title="Fill in all the fields" followCursor>
        <Button type='submit' fullWidth color="secondary" variant="contained">make tinyUrl</Button></Tooltip><br/><br/>
        </form>
        </div>
        </>
    )}
export default home
import React, { useEffect, useState } from 'react'
import { Button, IconButton, Tab, Tabs, TextField, Tooltip, Typography } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import EditIcon from '@mui/icons-material/Edit';
import '../style.css';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import {CopyButton} from '../try/advertisingLinks.js'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import newTry from './newTry.js';

const home = () =>{
    const [reloaded, setReloaded] = useState(false);

    useEffect(() => {
      const alreadyReloaded = localStorage.getItem('alreadyReloaded');
      if (!alreadyReloaded) {
        window.location.reload();
        localStorage.setItem('alreadyReloaded', 'true');
      }
    }, []);
    const baseUrl="http://localhost:9000/";
    const [tiny,setTiny] = useState('')
    const handleRefresh = () => {
        reset()
      };
    const addLink = async () =>{
        let originalUrl = watch("originalUrl")
        let uniqueName = watch("uniqueName")
        alert(originalUrl + ' ' + uniqueName)
        const res = await axios.post(baseUrl + "links",{headers:{authorization: localStorage.getItem('accessToken')},"originalUrl":originalUrl , "uniqueName":uniqueName})
        setTiny(res.data) 
        alert(res.data)  
    }
  const{reset,register,handleSubmit,watch,formState:{errors}}=useForm()

    return(
        <>
         <Typography color="secondary" variant="h4">home</Typography> 
        <div className="addLink">
         <form onSubmit={handleSubmit(addLink)}>
        <AddLinkIcon/> Enter a long URL to make a TinyURL
        <TextField {...register("originalUrl",{required:true})} color="secondary" fullWidth label="originalUrl"/><br/>
        <EditIcon/> enter alias<br/>
        <TextField {...register("uniqueName" ,{minLength:3,maxLength:15},{require:true})} color="secondary" label="uniqueName"/><br/>
        {errors.uniqueName && <p>between 3-15!!!</p>}
        <br/> <Tooltip title="Fill in all the fields" followCursor>
        <Button type='submit' fullWidth color="secondary" variant="contained">make tinyUrl</Button></Tooltip><br/><br/>
        {tiny==''?'':<div id='gray'><CopyButton url={tiny}/></div>}
        <Tooltip title="restart">
                            <IconButton>
                                <RestartAltIcon color="secondary" onClick={()=>handleRefresh()}  style={{ marginTop: 'auto' }}/>
                            </IconButton>
                        </Tooltip>
        </form>
        </div>
        </>
    )}
export default home


import React, { useEffect, useState } from 'react'
import { Button, IconButton,TextField, Tooltip, Typography } from '@mui/material';
import AddLinkIcon from '@mui/icons-material/AddLink';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import '../style.css';

const Home = () =>{
    useEffect(() => {
      const alreadyReloaded = localStorage.getItem('alreadyReloaded');
      if (!alreadyReloaded) {
        window.location.reload();
        localStorage.setItem('alreadyReloaded', 'true');
      }
    }, []);
    const baseUrl="http://localhost:9000/";
    const [tiny,setTiny] = useState('')
    const [login,setLogin] = useState(true)
    const handleRefresh = () => {
        reset()
        setTiny('')
      };
    const addLink = async () =>{
        let originalUrl = watch("originalUrl")
        let uniqueName = watch("uniqueName")
        if(localStorage.getItem('accessToken')=='')
            {
                setLogin(false)
            }
            else{
        alert(originalUrl + ' ' + uniqueName)
        const res = await axios.post(baseUrl + "links",{headers:{authorization: localStorage.getItem('accessToken')},"originalUrl":originalUrl , "uniqueName":uniqueName})
        setTiny(res.data) 
        alert(res.data)  
    }
    }
  const{reset,register,handleSubmit,watch,formState:{errors}}=useForm()
    return(
        <>
         <Typography id="space" color="secondary" variant="h4">home</Typography> 
        <div className="add-link">
         <form onSubmit={handleSubmit(addLink)}>
        <AddLinkIcon/> Enter a long URL to make a TinyURL
        <TextField {...register("originalUrl",{required:true})} color="secondary" fullWidth label="originalUrl"/><br/>
        <EditIcon/> enter alias<br/>
        <TextField {...register("uniqueName" ,{minLength:3,maxLength:15},{require:true})} color="secondary" label="uniqueName"/><br/>
        {errors.uniqueName && <p>between 3-15!!!</p>}
        <br/> <Tooltip title="Fill in all the fields" followCursor>
        <Button type='submit' fullWidth color="secondary" variant="contained">make tinyUrl</Button></Tooltip><br/><br/>
        {tiny==''?'':<div id='url-copy'><CopyButton url={tiny}/></div>}
        {!login&&<Stack sx={{ width: '100%' }} spacing={2}>   
      <Alert color='error' variant="outlined" severity="info">
      It looks like you are not logged in yet.<Link to="/signin">sign in</Link>
      </Alert>
    </Stack>}
        <Tooltip title="restart">
                            <IconButton>
                                <RestartAltIcon color="secondary" onClick={()=>handleRefresh()}  style={{ marginTop: 'auto' }}/>
                            </IconButton>
                        </Tooltip>
        </form>
        </div>
        </>
    )}
export default Home

///העתקת הקישור המקוצר
export const CopyButton = (props) => {
  const text = props.url
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the "Copied" state after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}>
      <label style={{ marginRight: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{props.url}</label>
      <Tooltip title={copied ? "Copied" : "Copy"}>
        <IconButton onClick={handleCopy}>
          <ContentCopyIcon color="secondary" />
        </IconButton>
      </Tooltip>
    </div>
    </div>
  );
};


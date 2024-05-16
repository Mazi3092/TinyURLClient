import { Button, Dialog, DialogTitle, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Target from './addTarget'
export default class MyUrls extends React.Component{
    state = {
        urls:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/links`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/links`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const urls = res.data;
            this.setState({urls})
        })
    }
    render(){
        const del = async(id) =>{
            alert(id)
           const  res = await axios.delete(`http://localhost:9000/links/` + id)
        }
        const delAll = async() =>{
            alert("all")
            await axios.delete(`http://localhost:9000/links`)
        }
        const addTarget = async() =>{
            alert("add Target")
            const res = await axios.put(`http://localhost:9000/links/AddTarget`,{"id":"64239b63d376e7620c44f702","newname":"volf","newvalue":1})
            alert(res.data)
        }
        
        return(
            <>
                <center>
                    {this.state.urls.length == 0? <Typography color="secondary" variant="p">לא נמצאו כתובות<WarningAmberIcon/></Typography>:
                    <div>
                    {this.state.urls.map(url=>
                    <div className="userss">
                         <p>{url.uniqueName}
           <Tooltip title="delete">
            <IconButton>
              <DeleteIcon onClick={()=>del(url.id)}/>
            </IconButton>
            </Tooltip>
            </p>
                    <Target idd = {url.id}/>
                    {url.targetValues.length==0?
                        <h4>אין טרגטים לקישור זה</h4>:
                       <ul>
                        <p>targets:</p>
                    {url.targetValues.map(target=>
                        <h4>{target.name}</h4>
                        )} 
                        </ul>
                    }
                    {/* <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon onClick={()=>del(url.id)}/>
                            </IconButton>
                        </Tooltip> */}
                        
                        {/* <Tooltip title="add target">
                            <IconButton>
                               <AddIcon onClick={()=>addTarget(url.id)}/>
                            </IconButton>
                        </Tooltip> */}
                         {/* <Toolbar color="secondary">    </Toolbar> */}
                    </div>
                 )}
                 <Button color="secondary" variant='contained' onClick={delAll}>מחק הכל</Button>
                 </div>}
                 </center>
            </>
        )
    }
}
import { Avatar, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { format } from "date-fns";
export default class Mail extends React.Component{
    state = {
        mailbox:{
            Inbox:[],
            Outbox:[],
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/users/mailbox`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const mailbox = res.data;
            console.log(mailbox)
            this.setState({mailbox})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/users/mailbox`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const mailbox = res.data;
            console.log(mailbox)
            this.setState({mailbox})
        })
    }
    render(){
        const del = async(id) =>{
            alert(id)
            const res = await axios.delete(`http://localhost:9000/users/` + id)
        }
        const delAll = async() =>{
            alert("all")
           const res = await axios.delete(`http://localhost:9000/users`)
        }
        return(
            <>
                <center>
                <Typography color="secondary" variant="h4">mailbox</Typography>
                <div className="paper" id="users-paper">
      <TableContainer sx={{ maxHeight: 440 }}>
         {this.state.mailbox.Inbox.length==0?<Typography color="secondary" variant="p">לא נמצאו הודעות נכנסות<WarningAmberIcon/></Typography>:
                   <> <h1>הודעות נכנסות</h1>
                    {this.state.mailbox.Inbox.map(message=>
                    <div style={{width:'20vw',color:"black"}} className="user-item">
                           {message.date==''?'':
                       <>
                        {format(new Date(message.date), 'dd/MM/yyyy')}<br/>
                         {format(new Date(message.date), 'HH:mm:ss')}
                         </> 
                       
}
                        {/* <div className="user-left"><p>{message.date}</p></div> */}
                        <div className="user-center"><p>{message.text}</p></div>
                        <div className="user-right"> <p>{message.from.name}</p></div>
                    {/* <p><Avatar>{user.name[0]}</Avatar> {user.name}</p> */}
                    {/* <p><Avatar src={user.profile} >{user.name[0]}</Avatar> {user.name}</p>
                    <p> {user.email}</p> */}
                    {/* <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>del(user.id)}/>
                            </IconButton>
                        </Tooltip> */}
                        </div>
                   
                 )} </>
                 }
                {this.state.mailbox.Outbox.length==0?<Typography color="secondary" variant="p">לא נמצאו הודעות יוצאות<WarningAmberIcon/></Typography>:
                   <> <h1>הודעות יוצאות</h1>
                   {this.state.mailbox.Outbox.map(message=>
                    <div className="user-item">
                       {message.date==''?'':
                       <>  {format(new Date(message.date), 'dd/MM/yyyy')}<br/>
                         {format(new Date(message.date), 'HH:mm:ss')}
                       
                       {/* {message.date.getUTCDate()} + '/' + {message.date.getUTCDate()} + '/' + {message.date.getUTCFullYear()} */}
                       </> 
    }
                         {/* <div className="user-left"><p>{message.date}</p></div> */}
                        <div className="user-center"><p>{message.text}</p></div>
                        <div className="user-right"> <p>{message.to.name}</p></div>
                    {/* <p><Avatar>{user.name[0]}</Avatar> {user.name}</p> */}
                    {/* <p><Avatar src={user.profile} >{user.name[0]}</Avatar> {user.name}</p>
                    <p> {user.email}</p> */}
                    {/* <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon color="secondary" onClick={()=>del(user.id)}/>
                            </IconButton>
                        </Tooltip> */}
                    </div>
                 )} </>
                }
                </TableContainer></div>
                </center>
            </>
        )
    }
}
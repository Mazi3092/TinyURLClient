import React, { Component } from 'react';
import './FormStyles.css';
import axios from 'axios';
import { Avatar, Badge, Button, IconButton, TableContainer, Tooltip, Typography } from "@mui/material";
import '../style.css'
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { format } from "date-fns";
import MailIcon from '@mui/icons-material/Mail';

export default class Mail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      activeTab: 'inbox',
      mailbox:{
        Inbox:[],
        Outbox:[],
    }
    };
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

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen
    }));
  };

  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false
    });
  };

  setActiveTab = (tab) => {
    this.setState({
      activeTab: tab
    });
  };

  renderContent = () => {
    const { activeTab } = this.state;
    switch (activeTab) {
      case 'inbox':
        return <div>תיבת דואר נכנס</div>;
      case 'sent':
        return <div>תיבת דואר יוצא</div>;
      default:
        return null;
    }
  };

  render() {
    const del = async(id) =>{
      alert(id)
      const res = await axios.delete(`http://localhost:9000/users/` + id)
  }
  const delAll = async() =>{
      alert("all")
     const res = await axios.delete(`http://localhost:9000/users`)
  }
    const { isSidebarOpen, activeTab } = this.state;

    return (
      <>
      <IconButton onClick={this.toggleSidebar} className="toggle-button" size="large"color="inherit">
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
        {/* <button onClick={this.toggleSidebar} className="toggle-button">
          תיבת הדואר הנכנס
        </button> */}
      <div className="App">
        {isSidebarOpen && (
          <div className="sidebar">
            <div className="tabs">
        <Button onClick={() => this.setActiveTab('inbox')} type='submit'  color="secondary" variant="contained">תיבת דואר נכנס</Button>
        <Button onClick={() => this.setActiveTab('sent')} type='submit' color="secondary" variant="contained">תיבת דואר יוצא</Button>

              {/* <button onClick={() => this.setActiveTab('inbox')} className={`tab-button ${activeTab === 'inbox' ? 'active' : ''}`}>
                תיבת דואר נכנס
              </button>
              <button onClick={() => this.setActiveTab('sent')} className={`tab-button ${activeTab === 'sent' ? 'active' : ''}`}>
                תיבת דואר יוצא
              </button> */}
            </div>
            <div className="tab-content">
                <Typography color="secondary" variant="h4">mailbox</Typography>
                <center>
                <div>
                {/* <div className="paper" id="users-paper"> */}
      <TableContainer sx={{ maxHeight: 440 }}>
      {activeTab=='inbox'?
                <>
         {this.state.mailbox.Inbox.length==0?<Typography color="secondary" variant="p">לא נמצאו הודעות נכנסות<WarningAmberIcon/></Typography>:
                   <> <h1 style={{color:'black'}}>הודעות נכנסות</h1>
                    {this.state.mailbox.Inbox.map(message=>
                    <div style={{color:"black"}} className="message-item">
                        <div className="user-right"> <p>{message.from.name}</p></div>
                        <div className="user-center"><p>{message.text}</p></div>
                        {message.date==''?'':
                       <>
                        {format(new Date(message.date), 'dd/MM/yyyy')}<br/>
                         {format(new Date(message.date), 'HH:mm:ss')}
                         </> }
                        </div>
                 )} </>}</>:<>
                {this.state.mailbox.Outbox.length==0?<Typography color="secondary" variant="p">לא נמצאו הודעות יוצאות<WarningAmberIcon/></Typography>:
                   <> <h1 style={{color:'black'}} >הודעות יוצאות</h1>
                   {this.state.mailbox.Outbox.map(message=>
                    <div style={{color:"black"}} className="message-item">
                        <div className="user-right"> <p>{message.to.name}</p></div>
                        <div className="user-center"><p>{message.text}</p></div>
                        {message.date==''?'':
                       <>  {format(new Date(message.date), 'dd/MM/yyyy')}<br/>
                         {format(new Date(message.date), 'HH:mm:ss')}
                       </> }
                    </div>
                 )} </>}
                 </>
              }
                </TableContainer>
                </div>
                </center>
        <Button sx={{position:'absolute',bottom:'3vh',right:'9vw'}} onClick={this.closeSidebar}  type='submit'  color="secondary" variant="contained">ביטול</Button>
            </div>
          </div>

        )}
      </div>
      </>
    );
  }
}

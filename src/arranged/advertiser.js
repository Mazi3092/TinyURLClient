import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Imoji from './ImojiInput.js';
import {  Button, TableContainer, Tooltip } from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import '../style.css'

export default class Advertiser extends React.Component{
    state = {
        advertisers:[]
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/advertisers`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const advertisers = res.data;
            this.setState({advertisers})
        })
    }
    componentDidUpdate(){
        axios.get(`http://localhost:9000/advertisers`,{headers:{authorization:localStorage.getItem('accessToken')}})
        .then(res=>{
            const advertisers = res.data;
            this.setState({advertisers})
        })
    }
    render(){
        return(
            <>
                <center>
                <Typography id="space" color="secondary" variant="h4">advertisers</Typography>
                <div className="paper" id="users-paper">
      <TableContainer sx={{ maxHeight: 500 }}>
         {this.state.advertisers.length==0?<Typography color="secondary" variant="p">לא נמצאו מפרסמים<WarningAmberIcon/></Typography>:
                   <div className="padding-top"> {this.state.advertisers.map(advertiser=>
                    <>
                    <div className="advertisers">
                        <RecipeReviewCard advertiser = {advertiser} profile={advertiser.profile} about={advertiser.about}/>
                    {/* <p><Avatar>{user.name[0]}</Avatar> {user.name}</p>
                    <p><Avatar src={advertiser.profile} ></Avatar> {advertiser.about}</p> */}
                    {/* <p> {advertiser.email}</p> */}
                    {/* <Tooltip title="Delete">
                            <IconButton> */}
                                {/* <DeleteIcon color="secondary" onClick={()=>del(user.id)}/> */}
                            {/* </IconButton>
                        </Tooltip> */}
                    </div>
                    </>
                 )}
                </div> }
                </TableContainer></div>
      {/* <div className="bpaper" id = "tt"> */}
      {/* <Button color="secondary" variant="contained" onClick={delAll}>מחק הכל</Button> */}
{/* </div> */}
                </center>
            </>
        )
    }
}
      
const ExpandMore = styled((props) => {
  // alert(p.Instagram)
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export function RecipeReviewCard(props) {
   
    const [expanded, setExpanded] = React.useState(false);
    const advertiser =  props.advertiser 
    const today = advertiser.entryDate
    const platforms = advertiser.details.platforms
    const plat = {Instagram:'https://i.pinimg.com/564x/f4/1e/2d/f41e2dab621c1ee5253cef74e3642fcf.jpg',
    TikTok:'https://i.pinimg.com/564x/e9/6e/95/e96e95506709a6ee7c4fa053c9cb920c.jpg',
    Facebook:'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg',
    YouTube:'https://i.pinimg.com/236x/31/42/4f/31424f19e85a5e78574c86272ef291dd.jpg',
    Email:'https://i.pinimg.com/564x/5e/a9/91/5ea9910c5f3f1961dac969aaced53470.jpg',
    WhatsApp:'https://i.pinimg.com/564x/8d/3f/22/8d3f2228d93ed72bc2d0417798df7040.jpg',
    }
    
  //  console.log(advertiser.details.platforms)
  //   const date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <>
      <Card  sx={{ width: '100%' }}>
        <CardHeader
          avatar={
            <Avatar src={advertiser.profile}></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={advertiser.name}
          subheader={today}
        />
        {/* <CardMedia
          component="img"
          height="194"
          image="https://i.pinimg.com/564x/12/ef/3b/12ef3bfb980433443461b0c9129206ba.jpg"
          alt="Paella dish"
        /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {advertiser.details.about}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           <b>קהל יעד: </b>{advertiser.details.audience}
           <br/>
           <b>גילאים: </b>{advertiser.details.followerAge}
           <br/>
        {platforms==0?'':
        <>
        <b>:בשיתוף</b>
        <div id='all-graphs'> 
        {platforms.map(p=>
        <Avatar src={plat[p]} />
        )}
        </div> 
        </>}
        </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions> */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        </Collapse>
        {/* <NewTry/> */}
        <Imoji id = {advertiser.userId}/> 
      </Card>
   </>
    );
  }
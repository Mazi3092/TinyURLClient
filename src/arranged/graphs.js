import React, { useEffect, useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Box, CssBaseline, Paper, TableContainer, Typography } from "@mui/material";
import axios from "axios";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Graph from "./graph.js";
import '../style.css'

const Graphs = () => {
    const [value, setValue] = React.useState('city');
    const ref = React.useRef(null);
    // const [messages, setMessages] = React.useState(() => refreshMessages());
    const [messages, setMessages] = React.useState();
  
    React.useEffect(() => {
      ref.current.ownerDocument.body.scrollTop = 0;
    //   setMessages(refreshMessages());
      const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/users/urls`, { headers: { authorization: localStorage.getItem('accessToken') } });
            setGraphs(response.data);
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData();
    }, [value, setMessages]);
  
    const [graphs, setGraphs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/users/urls`, { headers: { authorization: localStorage.getItem('accessToken') } });
                setGraphs(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <center>
            {value}
       <div className="graph-paper">
      <TableContainer sx={{ maxHeight: 440 }}>
    <Box sx={{ pb: 7 }} ref={ref}>
            {graphs.length === 0 ? (
                <Typography color="secondary" variant="p">לא נמצאו קישורים<WarningAmberIcon/></Typography>
            ) : (
                <div id="all-graphs">
                    {graphs.map(g => (
                        <div style={{textAlign:'center'}} key={g.uniqueName}>
                            <h2>{g.uniqueName}</h2>
                            {console.log(g.clicks)}
                            <Graph p={value} linkName={g.uniqueName} linkArr={g.clicks}/>
                        </div>
                    ))}
                </div>
            )}
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            
            setValue(newValue);
            // alert('newValue:' + newValue)
          }}
        >
          <BottomNavigationAction value='city' label="city" icon={<LocationCityIcon />} />
          <BottomNavigationAction value='targetParamValue'  label="targetParamValue" icon={<TrackChangesIcon/>} />
        </BottomNavigation>
      </Paper>
    </Box>
    </TableContainer></div>
        </center>
    );
}

export default Graphs;

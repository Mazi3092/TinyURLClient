import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import './style.css'

const full = () => {
  const fullDeails = async () =>{
    alert("ממלא...")
    await axios.delete("http://localhost:9000/links")
    await axios.delete("http://localhost:9000/users")

    const user1 = await axios.post("http://localhost:9000/users",{"name":"mazi","email":"mazi@gmail.com", "password":"0534113092"})
    await axios.post("http://localhost:9000/links",{"originalUrl":"https://start.telebank.co.il/login/#/LOGIN_PAGE" , "uniqueName":"Discont","userId":user1.data})
    await axios.post("http://localhost:9000/links",{"originalUrl":"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" , "uniqueName":"mail","userId":user1.data})
    await axios.post("http://localhost:9000/links",{"originalUrl":"https://il.shein.com/Women-Clothing-c-2030.html?ici=il_tab01navbar04&scici=navbar_WomenHomePage~~tab01navbar04~~4~~real_2030~~~~0&src_module=topcat&src_tab_page_id=page_order_detail1676466171434&src_identifier=fc%3DWomen%60sc%3D%D7%91%D7%99%D7%92%D7%95%D7%93%60tc%3D0%60oc%3D0%60ps%3Dtab01navbar04%60jc%3Dreal_2030&srctype=category&userpath=category-%D7%91%D7%99%D7%92%D7%95%D7%93" , "uniqueName":"shein","userId":user1.data})
   
    const user2 = await axios.post("http://localhost:9000/users",{"name":"shira","email":"shira@gmail.com" , "password":"12345678"})
    await axios.post("http://localhost:9000/links",{"originalUrl":"mui.com" , "uniqueName":"mui","userId":user2.data})
    await axios.post("http://localhost:9000/links",{"originalUrl":"https://www.kore.co.il/" , "uniqueName":"kolRega","userId":user2.data})


    const user3 = await axios.post("http://localhost:9000/users",{"name":"shoshi","email":"shoshi@gmail.com" , "password":"5458565253"})
    await axios.post("http://localhost:9000/links",{"originalUrl":"https://best.aliexpress.com/iw.htm?aff_fcid=6fa3547269fc442f89ca6ee72d458733-1666273849649-08450-b4Q28Fy4&aff_fsk=b4Q28Fy4&aff_platform=link-c-tool&sk=b4Q28Fy4&aff_trace_key=6fa3547269fc442f89ca6ee72d458733-1666273849649-08450-b4Q28Fy4&terminal_id=a612b687d00545d99949cef2c5b18ba5" , "uniqueName":"aliexpress","userId":user3.data})

    await axios.post("http://localhost:9000/users",{"name":"michal","email":"michal@gmail.com" , "password":"18542145"})
    await axios.post("http://localhost:9000/users",{"name":"brachi","email":"brachi@gmail.com" , "password":"556332215"})
    await axios.post("http://localhost:9000/users",{"name":"avishag","email":"avishag@gmail.com" , "password":"shug412"})
    await axios.post("http://localhost:9000/users",{"name":"tamear","email":"tamear@gmail.com" , "password":"11110000"})
    await axios.post("http://localhost:9000/users",{"name":"ruti","email":"ruti@gmail.com" , "password":"r12121212"})



    
  }
    return (
        <div className="sign">
        <Button onClick={fullDeails} type='submit'color="secondary" variant="contained">מלא</Button>
        </div>
)}
export default full
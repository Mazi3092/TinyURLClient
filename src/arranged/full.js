import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react'
import '../style.css'

const full = () => {
  const fullDeails = async () =>{
    alert("ממלא...")
    await axios.delete("http://localhost:9000/links/del")
    await axios.delete("http://localhost:9000/users/del")


    const ui = await axios.post("http://localhost:9000/signUp/users",{"name":"mazi","email":"mazi@gmail.com", "password":"0534113092","profile":"https://i.pinimg.com/564x/c7/16/b9/c716b92ce239a4fc55890274a0355d0b.jpg","links":[]})
    console.log(ui)
    const user1 = ui.data.token  
    alert(user1) 

    await axios.post("http://localhost:9000/links",{headers:{authorization: user1},"originalUrl":'originalUrl' , "uniqueName":'uniqueName'})
    await axios.post("http://localhost:9000/links",{headers:{authorization: user1},"originalUrl":"https://start.telebank.co.il/login/#/LOGIN_PAGE" , "uniqueName":"Discont"})
    await axios.post("http://localhost:9000/links",{headers:{authorization: user1},"originalUrl":"https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" , "uniqueName":"mail"})
    await axios.post("http://localhost:9000/links",{headers:{authorization: user1},"originalUrl":"https://il.shein.com/Women-Clothing-c-2030.html?ici=il_tab01navbar04&scici=navbar_WomenHomePage~~tab01navbar04~~4~~real_2030~~~~0&src_module=topcat&src_tab_page_id=page_order_detail1676466171434&src_identifier=fc%3DWomen%60sc%3D%D7%91%D7%99%D7%92%D7%95%D7%93%60tc%3D0%60oc%3D0%60ps%3Dtab01navbar04%60jc%3Dreal_2030&srctype=category&userpath=category-%D7%91%D7%99%D7%92%D7%95%D7%93" , "uniqueName":"shein"})
   
    const ui2 = await axios.post("http://localhost:9000/signUp/users",{"name":"ron","email":"ron@gmail.com" , "password":"12345678","profile":"https://i.pinimg.com/564x/14/de/5d/14de5d8ec465fed98f2b4a34c1fd7392.jpg","links":[]})
    const user2 = ui2.data.token  
    await axios.post("http://localhost:9000/links",{headers:{authorization: user2 },"originalUrl":"mui.com" , "uniqueName":"mui"})
    await axios.post("http://localhost:9000/links",{headers:{authorization: user2 },"originalUrl":"https://www.kore.co.il/" , "uniqueName":"kolRega"})


    const user3 = await axios.post("http://localhost:9000/signUp/users",{"name":"tomy","email":"tomy@gmail.com" , "password":"5458565253","profile":"https://i.pinimg.com/564x/50/8d/3a/508d3a6b866b5a70e1c5cec7edcc7c7e.jpg","links":[]})
    await axios.post("http://localhost:9000/links",{headers:{authorization: user3.data.token },"originalUrl":"https://best.aliexpress.com/iw.htm?aff_fcid=6fa3547269fc442f89ca6ee72d458733-1666273849649-08450-b4Q28Fy4&aff_fsk=b4Q28Fy4&aff_platform=link-c-tool&sk=b4Q28Fy4&aff_trace_key=6fa3547269fc442f89ca6ee72d458733-1666273849649-08450-b4Q28Fy4&terminal_id=a612b687d00545d99949cef2c5b18ba5" , "uniqueName":"aliexpress"})

    const user4 = await axios.post("http://localhost:9000/signUp/users",{"name":"eial","email":"eial@gmail.com" , "password":"18542145","profile":"https://i.pinimg.com/564x/bf/73/3c/bf733ccbd9d3974bb8b4144c3c9486f6.jpg"})
    const user5 = await axios.post("http://localhost:9000/signUp/users",{"name":"shay","email":"shay@gmail.com" , "password":"556332215","profile":"https://i.pinimg.com/564x/22/32/3c/22323cdf1f9323cff9d37adc7f5a3042.jpg"})
    const user6 = await axios.post("http://localhost:9000/signUp/users",{"name":"jon","email":"jon@gmail.com" , "password":"shug412","profile":"https://i.pinimg.com/736x/c5/5c/7a/c55c7a176082dab423628a4da6514afa.jpg"})
    await axios.post("http://localhost:9000/signUp/users",{"name":"kobi","email":"kobi@gmail.com" , "password":"11110000","profile":"https://i.pinimg.com/564x/ce/4f/3b/ce4f3b74d5cc3a56dd120c766342c46c.jpg"})
    await axios.post("http://localhost:9000/signUp/users",{"name":"stav","email":"stav@gmail.com" , "password":"r12121212","profile":"https://i.pinimg.com/564x/75/12/bf/7512bfb6e39054c35bc2a969cb5bfe3b.jpg"})
    await axios.post(`http://localhost:9000/advertisers`,{headers:{authorization: user2.data.token},
      about: 'היי אני רון אשמח לפרסם אותך😘\n\n',
      followerAge: '26-35',
      audience: 'בעליעסקים',
      platforms: [ 'TikTok']
    })
    await axios.post(`http://localhost:9000/advertisers`,{headers:{authorization: user4.data.token},
      about: 'היי אני אייל אשמח לפרסם אותך😘\n\n',
      followerAge: '26-35',
      audience: 'בעליעסקים',
      platforms: [ 'Instagram','WhatsApp' ]
    })
    await axios.post(`http://localhost:9000/advertisers`,{headers:{authorization: user5.data.token},
      about: 'היי אני שי אשמח לפרסם אותך😘\n\n',
      followerAge: '26-35',
      audience: 'בעליעסקים',
      platforms: [  'YouTube', 'Email', 'WhatsApp' ]
    })
    
  }
  const fullDeailsTwo = async () =>{
    // await axios.put("http://localhost:9000/users/sendMessage",{headers:{authorization:localStorage.getItem('accessToken')},'text':'hello from user1','to':'664bfb42b8da9f89957d5452'})
    // await axios.put("http://localhost:9000/users/sendMessage",{headers:{authorization:localStorage.getItem('accessToken')},'text':'hello from user1','to':'664bfb42b8da9f89957d5452'})
    // await axios.put("http://localhost:9000/users/sendMessage",{headers:{authorization:localStorage.getItem('accessToken')},'text':'hello from user2','to':'664bfb42b8da9f89957d544a'})
    }
    return (
        <div className="sign">
        <Button onClick={fullDeails} type='submit'color="secondary" variant="contained">מלא1</Button>
        <Button onClick={fullDeailsTwo} type='submit'color="secondary" variant="contained">מלא2</Button>

        </div>
)}
export default full
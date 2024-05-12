import React from "react";
import'../style.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import User from "./user.js";

function SignUp() {
    const navigate = useNavigate()

    const {register,watch,handleSubmit}=useForm()

    const onSubmit = () =>{ 
        // <User/>
        let password = watch("password")
        navigate("/signIn/"+watch("firstName"))
    }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>שם משתמש:</label><br/><br/>
        <input {...register("firstName")} type="text" name="firstName"/><br/><br/>
        <label>סיסמה:</label><br/><br/>
        <input {...register("password")} type="text"/><br/><br/>
        <label>טלפון:</label><br/><br/>
        <input {...register("phon",{required:true})} type="text"/><br/><br/>
        <label>מייל:</label><br/><br/>
        {/* <input type="email"/><br/><br/> */}
        <input type="submit" value="הרשם"/><br/><br/>
        </form>
        </>
    )
    
   
}
export default SignUp
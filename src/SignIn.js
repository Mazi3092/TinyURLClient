import React from "react";
import'../style.css'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignIn() {
    const navigate = useNavigate()
    const{register,watch,handleSubmit}=useForm()
    const onSubmit = () =>{
        if(watch("firstName")==="מזי" && watch("password")==="1111")
        navigate("/manager/" + watch("firstName"))   
        // alert("hello mazi")
        else
        navigate("/signUp/" + watch("firstName"))   
    }
    
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>שם משתמש:</label><br/><br/>
        <input {...register("firstName")} type="text"/><br/><br/>
        <label>סיסמה:</label><br/><br/>
        <input {...register("password")} type="text"/><br/><br/>
        <input type="submit" value="היכנס"/><br/><br/>
        </form>
        </>
    )
    
   
}
export default SignIn
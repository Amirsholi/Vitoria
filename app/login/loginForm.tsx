"use client"

import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";


const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password:""
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        
    }

    return ( 
        <>
        <Heading title="Sing in"/>

        <Button outline label="Continue with Google" icon={AiOutlineGoogle} onClick={()=>{}}/>
        <Button outline label="Continue with Facebook" icon={AiOutlineFacebook} onClick={()=>{}}/>

        <hr className="bg-slate-300 w-full h-px"/>

        <Input id="email" label="Email" disabled={isLoading} 
        register={register} errors={errors} required/>

        <Input id="password" label="Password" type="password" disabled={isLoading} 
        register={register} errors={errors} required/>

        <Button label={isLoading ? "Loading" : "Login"} onClick={handleSubmit(onSubmit)}/>
        <p className="text-sm">¿No tienes una cuenta?{" "}<Link className="underline" href="/register">Registrate</Link></p>
        </>
    );
}
 
export default LoginForm;
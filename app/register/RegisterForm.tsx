"use client"

import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";


const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email: "",
            password:""
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        
    }

    return ( 
        <>
        <Heading title="Registrate"/>

        <Button outline label="Sing up with Goolge" icon={AiOutlineGoogle} onClick={()=>{}}/>

        <hr className="bg-slate-300 w-full h-px"/>

        <Input id="name" label="Name" disabled={isLoading} 
        register={register} errors={errors} required/>

        <Input id="email" label="Email" disabled={isLoading} 
        register={register} errors={errors} required/>

        <Input id="password" label="Password" type="password" disabled={isLoading} 
        register={register} errors={errors} required/>

        <Button label={isLoading ? "Loading" : "Sing Up"} onClick={handleSubmit(onSubmit)}/>
        <p className="text-sm">¿Ya Tienes una cuenta?{" "}<Link className="underline" href="/login">Log In</Link></p>
        </>
    );
}
 
export default RegisterForm;
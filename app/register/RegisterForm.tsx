"use client"

import { useState } from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            name:"",
            email: "",
            password:""
        }
    })

    const router = useRouter()


    const onSubmit:SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true)

        axios.post("/api/register", data)
        .then(() => {

            toast.success("Usuario creado")

            signIn("credentials", {email: data.email, password: data.password, redirect: false})

            .then((callback) => {
                
                if (callback?.ok){
                    router.push("/cart")
                    router.refresh()
                    toast.success("¡Bienvenido!")
                }

                if (callback?.error){
                    toast.error(callback.error)
                }
            })
        })

        .catch(() => toast.error("Ups! Algo anda mal"))

        .finally(() => {
            setIsLoading(false)
        })
    }

    return ( 
        <>
        <Heading title="Registrate"/>

        <Button outline label="Sing up with Goolge" icon={AiOutlineGoogle} onClick={()=>{}}/>
        <Button outline label="Sing up with Facebook" icon={AiOutlineFacebook} onClick={()=>{}}/>

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
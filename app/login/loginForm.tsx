"use client"

import { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/products/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const LoginForm = () => {

    const [isLoading, setIsLoading] = useState(false);

    const {register, handleSubmit, formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password:""
        }
    })

    const router = useRouter()

    const onSubmit:SubmitHandler<FieldValues> = (data) => {

        setIsLoading(true)

        signIn("credentials", {...data, redirect: false}).then((callback) => {
            setIsLoading(false)

            if (callback?.ok){
                router.push("/")
                router.refresh()
                toast.success("¡Bienvenido!")
            }

            if (callback?.error){
                toast.error(callback.error)
            }
        })
    }

    return ( 
        <>
        <Heading title="Sing in"/>

        <Button outline label="Continuar con Google" icon={AiOutlineGoogle} onClick={()=>signIn("google", { callbackUrl: "/"})}/>

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
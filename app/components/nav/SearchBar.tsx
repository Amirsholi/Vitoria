'use client'

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<FieldValues>({
        defaultValues: {
            searchTerm: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) =>{
        if(!data.searchTerm) return router.push('/')

        const url = queryString.stringifyUrl({
            url: '/',
            query:{
                searchTerm: data.searchTerm
            }
        },{skipNull: true})

        router.push(url)
        reset()
    }

    return ( <div className="flex items-center">
        <input 
        {...register('searchTerm')}
        autoComplete="off"
        type="text"
        placeholder="Explore a farmacia"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:bourder-[0.5px] focus:border-slate-500 w-80"
        />
        <button onClick={handleSubmit(onSubmit)} className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md h-10 w-8"><GoSearch/></button>
    </div> );
}
 
export default SearchBar;
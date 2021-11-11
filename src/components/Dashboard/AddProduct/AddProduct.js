import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const {user} = useAuth()
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-5">
            <h1 className="text-center my-5">Add A Product</h1>
            <form  style={{marginLeft: "200px"}} onSubmit={handleSubmit(onSubmit)}>
                <input className="w-75 p-3" {...register("name")} placeholder="Name" /> <br />
                <input className="w-75 p-3 my-3" {...register("img")} placeholder="Image url" /> <br />
                <input className="w-75 p-3" {...register("describtion")} placeholder="Describtion" /> <br />
                <input className="w-75 p-3 my-3" type="number" {...register("password")} placeholder="Price" /> <br />
                <input className="w-75 p-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
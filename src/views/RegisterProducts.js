import React, { useEffect, useState } from "react";
import "../styles/register.css";
import Input from '../components/Input'
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from '../utils/baseUrl'
import 'react-toastify/dist/ReactToastify.css';
import authHeader from "../services/authHeader";

import axios from "axios";
const RegisterProducts = ({ showFormView }) => {


    const initialProduct = {
        name: "",
        quantity: 0,
        exportation_date: new Date(),
        expiration_date: new Date(),
        unit_price: "",
        company: ""


    };

    const [ProductData, setProductData] = useState(initialProduct);
    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setProductData({ ...ProductData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ProductData)
        if (ProductData.quantity !== 0) {
            setProductData({ ...ProductData, "quantity": parseInt(ProductData.quantity) })
        }

        axios.post(`${BASE_URL}/products`, ProductData, { headers: authHeader() })
            .then(function (response) {
                console.log(response)
                showFormView("false")

                toast.success("Product Added Successfully ")


            }).catch((error) => {
                toast.error(error?.response?.data?.message === "VALIDATION ERROR" ? error?.response?.data?.error : error?.response?.data?.message)
            })


    };
    return (

        <div className="login-form-container">
            <div className="text-center font-bold app-color uppercase text-xl header-reg ">
                Product registration
            </div>

            <form onSubmit={handleSubmit} noValidate>

                <div className="schoolmanager-container w-full max-w-xs mx-auto">
                    <div className="grid grid-cols-6 grid-rows-2  gap-8">
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="name"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter Product name"
                                placeholder="Enter Product name"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="quantity"
                                inputHandler={inputHandler}
                                type="number"
                                labelName="Enter Quantity"
                                placeholder="Enter Quantity"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="unit_price"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter Product Unit Price"
                                placeholder="Enter Product Unit Price"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="company"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter the Company"
                                placeholder="Enter the Company"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="exportation_date"
                                inputHandler={inputHandler}
                                type="date"
                                labelName="Exportation date"
                                placeholder="Exportation date"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="expiration_date"
                                inputHandler={inputHandler}
                                type="date"
                                labelName="Expiration Date"
                                placeholder="Expiration Date"
                                className="login-input"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button className="app-background text-gray-800 font-bold  py-2 px-10 rounded inline-flex items-center">
                        <span className="text-white">Register</span>
                    </button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={6000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </div>


    )
}

export default RegisterProducts
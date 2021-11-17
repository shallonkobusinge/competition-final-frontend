import React, { useEffect, useState } from "react";
import "../styles/register.css";
import Input from '../components/Input'
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from '../utils/baseUrl'
import 'react-toastify/dist/ReactToastify.css';
import authHeader from "../services/authHeader";

import axios from "axios";
const RegisterEmployees = ({ showFormView }) => {


    const initialUser = {
        email: "",
        fullNames: "",

    };


    const [EmployeeData, setEmployeeData] = useState(initialUser);
    const inputHandler = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        setEmployeeData({ ...EmployeeData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${BASE_URL}/employees`, EmployeeData, { headers: authHeader() })
            .then(function (response) {
                console.log(response)
                showFormView("false")
                toast.success("Employee Registered Successfully ")


            }).catch((error) => {
                toast.error(error?.response?.data?.message === "VALIDATION ERROR" ? error?.response?.data?.error : error?.response?.data?.message)
            })


    };
    return (

        <div className="login-form-container">
            <div className="text-center font-bold app-color uppercase text-xl header-reg ">
                Employee registration
            </div>

            <form onSubmit={handleSubmit} noValidate>

                <div className="schoolmanager-container w-full max-w-xs mx-auto">
                    <div className="grid grid-cols-6 grid-rows-2  gap-8">
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="fullNames"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter Full Names"
                                placeholder="Enter your full names"
                                className="login-input"
                                required
                            />
                        </div>
                        <div className="col-span-6 gap-6 sm:col-span-6 sm:row-span-1 ">
                            <Input
                                name="email"
                                inputHandler={inputHandler}
                                type="text"
                                labelName="Enter employee email"
                                placeholder="Enter Employee email"
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

export default RegisterEmployees
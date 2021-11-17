import axios from 'axios'
import authHeader from '../services/authHeader'
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from '../utils/baseUrl'
import 'react-toastify/dist/ReactToastify.css';
const EmployeesTable = ({ data = [] }) => {



    return (


        <div>
            <table className="sm-transfers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {data.map((employee) => (
                    <>
                        <tbody>

                            <tr>
                                <td>{employee?.email}</td>
                                <td>{employee?.fullNames}</td>
                                <td className="cursor-pointer" onClick={() => EditEmployee(employee?._id)}>Edit</td>

                            </tr>
                        </tbody>
                    </>
                ))}
            </table>
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

export default EmployeesTable
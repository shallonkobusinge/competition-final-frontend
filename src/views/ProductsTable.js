import axios from 'axios'
import authHeader from '../services/authHeader'
import { ToastContainer, toast } from "react-toastify";
import BASE_URL from '../utils/baseUrl'
import 'react-toastify/dist/ReactToastify.css';
const ProductsTable = ({ data }) => {
    const deleteProduct = async (id) => {
        await axios.delete(`${BASE_URL}/products/${id}`, { headers: authHeader() })
            .then((response) => {
                toast.success("Product Deleted Successfully!!")
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message)
            })
    }

    const approveProduct = async (id) => {
        await axios.put(`${BASE_URL}/products/${id}`, { headers: authHeader() })
            .then((response) => {
                toast.success("Product approved Successfully!!")
            })
            .catch((error) => {
                toast.error(error?.response?.data?.message)
            })
    }
    return (
        <div>
            <table className="sm-transfers-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Expiration date</th>
                        <th>Exportation date</th>
                        <th>Approve</th>
                        <th >Delete</th>
                    </tr>
                </thead>
                {data.map((product) => (
                    <>
                        <tbody>

                            <tr>
                                <td>{product?.name}</td>
                                <td>{product?.quantity}</td>
                                <td>{product?.expiration_date}</td>
                                <td>{product?.exportation_date}</td>
                                <td className="cursor-pointer" onClick={() => approveProduct(product?._id)}>Approve</td>
                                <td className="cursor-pointer" onClick={() => deleteProduct(product?._id)}>Delete</td>

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

export default ProductsTable
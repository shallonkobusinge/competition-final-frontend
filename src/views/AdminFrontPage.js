import Navbar from '../components/Navbar'
import TableHeader from '../components/TableHeader'
import RegisterEmployees from './RegisterEmployees'
import RegisterProducts from './RegisterProducts'
import EmployeesTable from './EmployeesTable'
import { getAllEmployeesForTheTable, getAllProductsForTheTable } from '../services/users'
import React from 'react'
import ProductsTable from './ProductsTable'
const AdminFrontPage = () => {
    const [activeTab, setActivetab] = React.useState("PRODUCTS")
    const [showForm, setShowForm] = React.useState("false")
    const [reports, setReports] = React.useState([])
    const [productReport, setProductReport] = React.useState([])
    const showFormView = (newValue) => {
        setShowForm(newValue)
    }
    const changeActiveTab = (newValue) => {
        setActivetab(newValue)
        showFormView("false")

    }
    const loadData = async () => {

        return await getAllEmployeesForTheTable()
    }
    const loadProductData = async () => {

        return await getAllProductsForTheTable()
    }

    React.useEffect(async () => {

        setReports(await loadData())
        setProductReport(await loadProductData())


    }, [activeTab])

    const AllTabs = [
        {
            title: "PRODUCTS"
        },
        {
            title: "EMPLOYEES"
        }

    ]


    let tabs = new Set()
    AllTabs.map((tab) => {
        tabs.add(tab.title)
    })
    tabs = [...tabs]

    return (
        <>
            <Navbar

                showIcon={true}
            >
                <TableHeader activeTab={activeTab} changeActiveTab={changeActiveTab} tabs={[...tabs]}>
                    {activeTab === "PRODUCTS" ?
                        <button className="add-button" onClick={() => showFormView("Products")}>Register Products</button>
                        :
                        <button className="add-button" onClick={() => showFormView("Employees")}>Register Employees</button>
                    }
                </TableHeader>

                {(showForm === "Products" && activeTab === "PRODUCTS") ? <RegisterProducts showFormView={showFormView} /> : (showForm !== "Products" && activeTab === "PRODUCTS") ? < ProductsTable data={productReport} /> : null}
                {(showForm === "Employees" && activeTab === "EMPLOYEES") ? <RegisterEmployees showFormView={showFormView} /> : (showForm !== "Employees" && activeTab === "EMPLOYEES") ? < EmployeesTable data={reports} /> : null}


            </Navbar>
        </>
    )
}



export default AdminFrontPage
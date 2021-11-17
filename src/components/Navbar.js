import { useHistory } from 'react-router-dom'
const Navbar = ({ showIcon, children }) => {
    let history = useHistory()
    const logout = () => {

        sessionStorage.removeItem("token")
        setTimeout(() => {
            history.push('/')
        }, 3000);
    }
    return (
        <div>
            <div class="flex justify-between app-background text-white p-4">
                <div>

                    MVM FOX ltd
                </div>
                {
                    showIcon &&

                    <div className="text-white cursor-pointer" onClick={() => logout()}>
                        LOGOUT
                    </div>
                }
            </div>
            {children}
        </div>

    )
}

export default Navbar
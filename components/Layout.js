import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="content">
            {children}
        </div>
    )
}
 
export default Layout
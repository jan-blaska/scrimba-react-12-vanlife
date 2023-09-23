import { NavLink, Link } from "react-router-dom"
import imageUrl from "/avatar-icon.png" 

export default function Header() {
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <div className="container">
                <nav>
                    <Link className="nav--link-main" to="/">#VANLIFE</Link>
                    <div className="links-to-pages">
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link-selected" : null } 
                            to="/host"
                        >
                            Host
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link-selected" : null } 
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => isActive ? "nav-link-selected" : null } 
                            to="/vans"
                        >
                            Vans
                        </NavLink>
                        <Link to="login" className="login-link">
                            <img 
                                src={imageUrl}
                                className="login-icon"
                            />
                        </Link>
                        <button onClick={fakeLogOut}>X</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
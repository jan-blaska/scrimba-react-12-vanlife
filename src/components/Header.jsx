import { NavLink, Link } from "react-router-dom"

export default function Header() {
    
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
                    </div>
                </nav>
            </div>
        </header>
    )
}
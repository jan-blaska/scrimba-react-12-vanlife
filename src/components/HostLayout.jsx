import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function HostLayout() {
    return (
        <div className="wrapper">
            <div className="container">
                <nav className="host-nav">
                    <NavLink 
                        to="/host"
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="/host/income"
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Income
                    </NavLink>
                    <NavLink 
                        to="/host/reviews"
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Reviews
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </div>
    )
}
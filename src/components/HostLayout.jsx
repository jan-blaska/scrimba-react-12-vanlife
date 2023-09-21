import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"


export default function HostLayout() {
    return (
        <div className="wrapper">
            <div className="container">
                <nav className="host-nav">
                    <NavLink 
                        to="."
                        end
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink 
                        to="income"
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Income
                    </NavLink>
                    <NavLink 
                        to="vans"
                        className={({isActive}) => isActive ? "nav-link-selected" : null }
                    >
                        Vans
                    </NavLink>
                    <NavLink 
                        to="reviews"
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
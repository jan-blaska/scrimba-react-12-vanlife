import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    
    const params = useParams()
    const [hostVan, setHostVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans[0]))
    }, [params.id])


    return (
        <div className="host-van-detail-wrapper">
            <Link 
                to="/host/vans"
                relative="path"
            >
                &larr; Back to all vans
            </Link>
            {hostVan ? 
                <div className="host-van-detail">
                    <div className="host-van-detail-card">
                        <img src={hostVan.imageUrl} alt={`Image of the van called ${hostVan.name}`} />
                        <div className="host-van-detail-card--desc">
                            <button className={`filter-btn btn-${hostVan.type}`}>{hostVan.type}</button>
                            <h1>{hostVan.name}</h1>
                            <p><strong>${hostVan.price}</strong>/day</p>
                        </div>
                    </div>
                    <nav className="host-van-detail-nav">
                        <NavLink
                            to="."
                            end
                            className={({isActive}) => isActive ? "nav-link-selected" : null }
                        >
                            Details
                        </NavLink>
                        <NavLink
                            to="pricing"
                            className={({isActive}) => isActive ? "nav-link-selected" : null }
                        >
                            Pricing
                        </NavLink>
                        <NavLink
                            to="photos"
                            className={({isActive}) => isActive ? "nav-link-selected" : null }
                        >
                            Photos
                        </NavLink>
                    </nav>
                    <Outlet context={ {hostVan} }/>
                </div>
            : <h1>Loading..</h1>}
        </div>
    )
}
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
import React from "react"
import { useParams } from "react-router-dom"
import { getVan } from "../../../api"

export default function HostVanDetail() {
    
    const params = useParams()
    const [hostVan, setHostVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setHostVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [params.id])

    // if things are currently loading, we display h1 on the page
    if (loading) {
        return <h1>Loading...</h1>
    }

    // if there is an error, we display error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-van-detail-wrapper">
            <Link 
                to="/host/vans"
                className="link-back-to-vans"
            >
                &larr; <span>Back to all vans</span>
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
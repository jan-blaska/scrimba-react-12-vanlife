import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { getVan } from "../../../api"

export default function VanDetail() {
    
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(params.id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [params.id])
    
    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    
    // if things are currently loading, we display h1 on the page
    if (loading) {
        return <h1>Loading...</h1>
    }

    // if there is an error, we display error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="section--van-detail">

            {van ? (
                <div className="container">
                    <div className="van-detail-card">
                        <Link 
                            to={`..${search}`}
                            relative="path"
                            className="link-back-to-vans"
                            
                        >
                            &larr; <span>Back to {type} vans</span>
                        </Link>
                        <img src={van.imageUrl} alt={`Image of van called ${van.name}`} />
                        <button className={`filter-btn btn-${van.type}`}>{van.type}</button>
                        <h3>{van.name}</h3>
                        <h4><strong>${van.price}</strong>/day</h4>
                        <p>{van.description}</p>
                        <Link to={`/vans/${van.id}`} className="orange-btn link-btn">Rent this van</Link>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </section>
    )

}
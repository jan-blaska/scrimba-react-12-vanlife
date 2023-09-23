import React from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../../../api"

export default function Vans() {
    
    const [vanArray, setVanArray] = React.useState([])
    let [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

   
    const typeFilter = searchParams.get("type")
    
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVanArray(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    
    const filteredVanArray = typeFilter 
    ? vanArray.filter(van => van.type === typeFilter) 
        : vanArray

    const vanCardElements = filteredVanArray.map((van) => {
        return (
            <div key={van.id} className="vans-card">
                <Link 
                    to={van.id}
                    state={{ 
                        search: `?${searchParams.toString()}`,
                        type: typeFilter
                    }}
                >
                    <img src={van.imageUrl} alt={`Image of van called ${van.name}`} />
                    <div className="vans-card--name">
                        <h3>{van.name}</h3>
                        <h3>${van.price}</h3>
                    </div>
                    <p>/day</p>
                    <button className={`filter-btn btn-${van.type}`}>{van.type}</button>
                </Link>
            </div>
        )
    })
    
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    // if things are currently loading, we display h1 on the page
    if (loading) {
        return <h1>Loading...</h1>
    }

    // if there is an error, we display error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <section className="section--vans">
            <div className="container">
                <div className="section--vans-wrapper">
                    <h1 className="section--vans-main-header">Explore our van options</h1>
                    <div className="section--vans-filters">
                        <button 
                            className={`filter-btn-option simple ${typeFilter === "simple" ? "selected" : ""}`} 
                            onClick={() => handleFilterChange("type", "simple")}
                        >
                            Simple
                        </button>
                        <button 
                            className={`filter-btn-option luxury ${typeFilter === "luxury" ? "selected" : ""}`} 
                            onClick={() => handleFilterChange("type", "luxury")}
                        >
                            Luxury
                        </button>
                        <button 
                            className={`filter-btn-option rugged ${typeFilter === "rugged" ? "selected" : ""}`} 
                            onClick={() => handleFilterChange("type", "rugged")}
                        >
                            Rugged
                        </button>
                        {typeFilter 
                        ?   <button 
                                className="filter-btn-clear" 
                                onClick={() => handleFilterChange("type", null)}
                            >
                                Clear filters
                            </button>
                        : null
                        }
                    </div>
                    <div className="vans-grid">
                        {vanCardElements}
                    </div>
                </div>
            </div>
        </section>
    )
}
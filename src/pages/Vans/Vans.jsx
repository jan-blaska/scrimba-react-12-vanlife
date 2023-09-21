import { Link, useSearchParams } from "react-router-dom"
import React from "react"

export default function Vans() {
    
    const [vanArray, setVanArray] = React.useState([])
    let [searchParams, setSearchParams] = useSearchParams();

   
    const typeFilter = searchParams.get("type")
    console.log(typeFilter)
    
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanArray(data.vans))
    }, [])

    const vanCardElements = vanArray.map((van) => {
        return (
            <div key={van.id} className="vans-card">
                <Link to={`/vans/${van.id}`}>
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
    

    return (
        <section className="section--vans">
            <div className="container">
                <div className="section--vans-wrapper">
                    <h1 className="section--vans-main-header">Explore our van options</h1>
                    <div className="vans-grid">
                        {vanCardElements}
                    </div>
                </div>
            </div>
        </section>
    )
}
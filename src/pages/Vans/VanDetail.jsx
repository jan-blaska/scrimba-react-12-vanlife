import { Link } from "react-router-dom"
import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    
    const params = useParams()
    const [van, setVan] = React.useState(null)
    
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    


    return (
        <section className="section--van-detail">
            {van ? (
                <div className="container">
                    <div className="van-detail-card">
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
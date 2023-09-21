import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    }, [])

    const hostVansElements = hostVans.map((van) => {
        return (
            <Link key={van.id} to={`/host/vans/${van.id}`}>
                <div className="host-van-card">
                    <img src={van.imageUrl} alt={`Image of the van called ${van.name}`} />
                    <div>
                        <h4 className="host-van-card--name">{van.name}</h4>
                        <p className="host-van-card--price">${van.price}/day</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className="host-vans">
            <h1 className="host-vans-header">Your listed vans</h1>
            <div className="host-vans-grid">
                {hostVansElements}
            </div>
        </div>
    )
}
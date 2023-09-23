import React from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../../api"

export default function HostVans() {
    const [hostVans, setHostVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setHostVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const hostVansElements = hostVans.map((van) => {
        return (
            <Link key={van.id} to={van.id}>
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

    // if things are currently loading, we display h1 on the page
    if (loading) {
        return <h1>Loading...</h1>
    }

    // if there is an error, we display error message
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-vans">
            <h1 className="header-36">Your listed vans</h1>
            <div className="host-vans-grid">
                {hostVansElements}
            </div>
        </div>
    )
}
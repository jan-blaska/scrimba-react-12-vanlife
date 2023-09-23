import React from "react"
import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import { getHostVans } from "../../../api"


export default function Dashboard() {
    
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
            <Link key={van.id} to={`vans/${van.id}`}>
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
        <div className="dashboard">
            <div>
                <h2 className="header-36">Welcome!</h2>
                <div className="dashboard--welcome-link">
                    <p className="paragraph grey">Income last <span className="bold">30 days</span></p>
                    <Link className="paragraph" to="income">Details</Link>
                </div>
                <h1 className="header-48">$2,260</h1>
            </div>
            <div>
                <div className="dashboard--review-link">
                    <h3 className="header-24">Review score</h3>
                    <FaStar className="star"/>
                    <p className="header-20">5.0<span className="grey">/5</span></p>
                    <Link className="paragraph" to="reviews">Details</Link>
                </div>
            </div>
            <div className="dashboard--vans">
                <h3 className="header-24">Your listed vans</h3>
                <Link className="paragraph" to="vans">View all</Link>
            </div>
            <div className="host-vans-grid">
                {hostVansElements}
            </div>
        </div>
    )
}
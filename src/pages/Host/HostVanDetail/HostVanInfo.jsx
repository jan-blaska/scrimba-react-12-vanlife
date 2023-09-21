import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className="host-van-detail-info">
            <p><strong>Name:</strong> {hostVan.name}</p>
            <p><strong>Category:</strong> {hostVan.type}</p>
            <p><strong>Description:</strong> {hostVan.description}</p>
            <p><strong>Visibility:</strong> Public</p>
        </div>
    )
}
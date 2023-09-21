import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className="host-van-detail-photos">
            <img src={hostVan.imageUrl} alt={`image of the van called ${hostVan.name}`} />
        </div>
    )
}
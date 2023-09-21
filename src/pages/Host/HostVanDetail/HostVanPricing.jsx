import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { hostVan } = useOutletContext()
    
    return (
        <div className="host-van-detail-pricing">
            <p><strong>${hostVan.price.toFixed(2)}</strong>/day</p>
        </div>
    )
}
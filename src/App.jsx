import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from './pages/Home.jsx'
import HostLayout from "./components/HostLayout"
import Dashboard from './pages/Host/Dashboard.jsx'
import Income from './pages/Host/Income.jsx'
import HostVans from './pages/Host/HostVans.jsx'
import HostVanDetail from './pages/Host/HostVanDetail.jsx'
import HostVanInfo from './pages/Host/HostVanDetail/HostVanInfo.jsx'
import HostVanPhotos from './pages/Host/HostVanDetail/HostVanPhotos.jsx'
import HostVanPricing from './pages/Host/HostVanDetail/HostVanPricing.jsx'
import Reviews from './pages/Host/Reviews.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans/Vans.jsx'
import VanDetail from './pages/Vans/VanDetail.jsx'

export default function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/vans" element={<Vans />} />
					<Route path="/vans/:id" element={<VanDetail />} />
					
					<Route path="host" element={<HostLayout />} >
						<Route index element={<Dashboard />} />
						<Route path="income" element={<Income />} />
						<Route path="vans" element={<HostVans />} />
						<Route path="vans/:id" element={<HostVanDetail />} >
							<Route index element={<HostVanInfo />}	/>
							<Route path="pricing" element={<HostVanPricing />} />
							<Route path="photos" element={<HostVanPhotos />} />
						</Route>
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}



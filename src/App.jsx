import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}



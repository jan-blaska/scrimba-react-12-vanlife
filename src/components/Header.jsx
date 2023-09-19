import { Link } from "react-router-dom"

export default function Header() {
    
    return (
        <header>
            <div className="container">
                <nav>
                    <Link className="nav--link-main" to="/">#VANLIFE</Link>
                    <div className="links-to-pages">
                        <Link to="/about">About</Link>
                        <Link to="/vans">Vans</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../../api"


export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from || "/host"

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")

        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(fromPage, { replace: true })
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div className="login-page">
                    {location.state?.message ? <h3>{location.state.message}</h3> : null}
                    <h1>Sign in to your account</h1>
                    {error ? <h3>{error.message}</h3> : null}
                    <form onSubmit={handleSubmit} className="login-page--form">
                        <input
                            name="email"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email address"
                            value={loginFormData.email}
                            />
                        <input
                            name="password"
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            value={loginFormData.password}
                            />
                        <button 
                            disabled={status === "submitting"}
                            className={`orange-btn link-btn ${status === "submitting" ? "submitting-btn" : null}`}
                        >
                            {status === "submitting" ? "Logging in..." : "Sign in"}
                        </button>
                    </form>
                    <p>Don’t have an account? <span>Create one now</span></p>
                </div>
            </div>
        </div>
    )

}
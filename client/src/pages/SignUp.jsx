import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.id]: e.target.value,
            }
        )
    }

    const handleSubmit = async (e) => {

        try {
            setLoading(true)
            e.preventDefault()
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (data.success === false) {
                setLoading(false)
                setError(data.message)
                return
            }

            setLoading(false)
            setError(null)
            navigate('/sign-in')
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }


    }

    console.log(formData)

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input onChange={handleChange} type="text" id="username" placeholder="Username" className="border rounded-lg p-3" />
                <input onChange={handleChange} type="text" id="email" placeholder="Email" className="border rounded-lg p-3" />
                <input onChange={handleChange} type="password" id="password" placeholder="Password" className="border rounded-lg p-3" />
                <button disabled={loading} className="p-3 bg-slate-700 text-white rounded-lg font-700 hover:opacity:95 disabled:80">
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to={"/sign-in"}>
                    <span className='text-blue-700'>Sign in</span>
                </Link>
            </div>
                {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}

export default SignUp
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice.js';

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { loading, error } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            e.preventDefault()
            dispatch(signInStart())
            const res = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await res.json()
            if (data.success === false) {
                dispatch(signInFailure(data.message))
                return
            }

            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            dispatch(signInFailure(error.message))
        }


    }

    console.log(formData)

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input onChange={handleChange} type="text" id="email" placeholder="Email" className="border rounded-lg p-3" />
                <input onChange={handleChange} type="password" id="password" placeholder="Password" className="border rounded-lg p-3" />
                <button disabled={loading} className="p-3 bg-slate-700 text-white rounded-lg font-700 hover:opacity:95 disabled:opacity:80">
                    {loading ? 'Loading...' : 'Sign In'}
                </button>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Don&apos;t have an account?</p>
                <Link to={"/sign-up"}>
                    <span className='text-blue-700'>Sign up</span>
                </Link>
            </div>
            {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
    )
}

export default SignIn
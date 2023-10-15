import { BiMenu, BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-slate-200'>
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to='/'>
                    <div className="flex align-center gap-2">
                        <img src="public\ppsi.png" className='object-contain' alt="" />
                        <h1 className='font-bold text-lg'>PPSI Hiree Information Tracker System</h1>
                    </div>
                </Link>
                <form action="" className='flex justify-between items-center bg-slate-100 p-3 rounded'>
                    <input type="text" name="" placeholder='Search...' id="" className='bg-transparent w-24 focus:outline-none sm:w-64 ' />
                    <BiSearch />
                </form>
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li>Sign In</li>
                    </Link>
                </ul>
                {/* <BiMenu className='text-2xl'/> */}
            </div>

        </header>
    )
}

export default Header
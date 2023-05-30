import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons'
// import { useContext } from 'react'
// import { Web3Context } from '../../Context'

const NavBar = () => {
    // const context = useContext( Web3Context )

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center'>
                <li className='font-semibold text-lg'>
                    <NavLink className=''>
                        <h2>Web3Aprende</h2>
                        {/* <img src="" alt="" className='h-20 w-20' /> */}
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li className='font-semibold text-lg'>
                    <NavLink className=''>
                        <Buttons />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
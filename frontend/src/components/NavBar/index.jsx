import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons'
import { LogoWeb3 } from '../../assets/Logos'
// import { useContext } from 'react'
// import { Web3Context } from '../../Context'

const NavBar = () => {
    // const context = useContext( Web3Context )

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center'>
                <li>
                    <NavLink>
                        <LogoWeb3 />
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center'>
                <li>
                    <NavLink>
                        <Buttons
                            textButton='Conectar '
                            iconButton={'->'}
                        />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
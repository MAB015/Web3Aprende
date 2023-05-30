import { NavLink } from 'react-router-dom'
import Buttons from '../Buttons'
import { LogoWeb3 } from '../../assets/Logos'

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-4 px-8 text-sm font-light'>
            <ul className='flex items-center'>
                <li>
                    <NavLink to='/'>
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
                            navigateTo='/conectado'
                        />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
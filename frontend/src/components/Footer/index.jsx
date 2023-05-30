import { Link } from "react-router-dom"
import { LogoWeb3 } from '../../assets/Logos'
import { LogoReddit } from '../../assets/Logos'

const Footer = () => {
    return (
        <div className='flex w-full justify-between items-center px-8 py-5 mt-auto'>
            <Link to='/'>
                <LogoWeb3 />
            </Link>
            <hr className=' border-1 border-[#00FFD1] w-full mx-20' />
            <Link to='#'>
                <LogoReddit propsLogoReddit='w-16' />
            </Link>
        </div>
    )
}

export default Footer
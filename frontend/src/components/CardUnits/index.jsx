import { Link } from 'react-router-dom'
import Buttons from '../Buttons'
import Units from '../Units'
import { ArrowDown } from '../../assets/Imagenes'


const CardUnits = () => {
    return (
        <div className='flex flex-col items-center gap-16'>
            <div className='flex flex-col gap-16 mt-16 w-1/2'>
                
                <Link to='/units' className='flex items-center gap-8'>
                    <Units unidadNumero='U1' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#14CCAB] to-[#00FFD1]'>Antes de Web3 y Blockchain</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                    </div>
                </Link>
                <Link to='/units' className='flex flex-row-reverse items-center gap-8'>
                    <Units unidadNumero='U2' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#14CCAB] to-[#00FFD1]'>Antes de Web3 y Blockchain</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                    </div>
                </Link>
                <Link to='/units' className='flex items-center gap-8'>
                    <Units unidadNumero='U3' />
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#14CCAB] to-[#00FFD1]'>Antes de Web3 y Blockchain</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                    </div>
                </Link>
            </div>
            <Buttons
                textButton='Ver más '
                iconButton={'...'}
            />
            <ArrowDown />
        </div>
        
    )
}

export default CardUnits
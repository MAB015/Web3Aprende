import Buttons from '../Buttons'
import { LongLogoWeb3 } from '../../assets/Logos'
import ArrowDown from '../../assets/arrow-down.svg'
import Poligon from '../../assets/foto-poligon.png'

const Hero = () => {
    return(
        <div className='flex flex-col items-center gap-8 w-1/2'>
            <p className='text-4xl'>Bienvenido(a) a</p>
            <LongLogoWeb3 />
            <p className='text-4xl text-center'>crecimiento y sostenibilidad del ecosistema web3</p>
            <Buttons
                textButton='Conectar '
                iconButton={'->'}
            />
            <img src={ Poligon } alt='foto web3' className='w-60' />
            <img src={ ArrowDown } alt='arrow down' className='w-48'/>
        </div>
    )
}


export default Hero
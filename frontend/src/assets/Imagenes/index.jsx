import ArrowDownImg from './files/arrow-down.svg'
import FotoPoligonImg from './files/foto-poligon.png'
import RombosImg from './files/unidades-rombo.svg'

export const ArrowDown = () => {
    return (
        <div>
            <img src={ ArrowDownImg } alt='más información' className='w-48' />
        </div>
    )
}

export const FotoPoligon = () => {
    return (
        <div>
            <img src={ FotoPoligonImg } alt='foto futuro' className='w-60' />
        </div>
    )
}

export const Rombos = (props) => {
    const { unidadNumero } = props

    return (
        <div>
            <img src={ RombosImg } alt={ unidadNumero } className='w-48' />
        </div>
    )
}
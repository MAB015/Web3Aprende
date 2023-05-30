import { Rombos } from "../../assets/Imagenes"

const Units = props => {
    const { unidadNumero } = props

    return (
        <div className='relative'>
            <Rombos unidadNumero={ unidadNumero } />
            <p className='text-5xl text-black font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{ unidadNumero }</p>
        </div>
    )
}

export default Units
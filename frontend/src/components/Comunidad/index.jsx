import Buttons from "../Buttons"
import { LogoReddit } from "../../assets/Logos"

const Comunidad = () => {
    return (
        <div className='flex flex-col items-center py-16 gap-8'>
            <div className='flex flex-col intems-center gap-8'>
                <p className='text-center text-3xl'>Uneté a la</p>
                <h2 className='font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#14CCAB] to-[#00FFD1]'>Comunidad Web3Aprende</h2>
            </div>
            <Buttons
                textButton='¡Unirme! '
                iconButton={ <LogoReddit propsLogoReddit='w-8 brightness-0' /> }
                navigateTo='#'
            />
        </div>
    )
}

export default Comunidad
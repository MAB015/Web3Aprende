import Buttons from "../Buttons"

const Hero = () => {
    return(
        <div className='flex flex-col items-center gap-10'>
            <p className='text-3xl'>Bienvenido(a) a</p>
            <h1 className='text-5xl text-cyan-300'>Web3Aprende</h1>
            <p className='text-3xl'>crecimiento y sostenibilidad del ecosistema web3</p>
            <Buttons />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    )
}


export default Hero
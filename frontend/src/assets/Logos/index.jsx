import Web3Logo from './web3aprende-logo.svg'
import Web3LongLogo from './web3aprende-long-logo.svg'

export const LogoWeb3 = () => {
    return (
        <div>
            <img src={ Web3Logo } alt='Logo Web3Aprende' className='w-20' />
        </div>
    )
}

export const LongLogoWeb3 = () => {
    return (
        <div>
            <img src={ Web3LongLogo } alt='Long Logo Web3Aprende' className='w-96' />
        </div>
    )
}
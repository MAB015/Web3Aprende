import Web3Logo from './files/web3aprende-logo.svg'
import Web3LongLogo from './files/web3aprende-long-logo.svg'
import RedditLogo from './files/reddit-logo.svg'

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

export const LogoReddit = props => {
    const { propsLogoReddit } = props

    return (
        <div>
            <img 
                src={ RedditLogo }
                alt='Logo de Reddit'
                className={ propsLogoReddit }
            />
        </div>
    )
}
import { Link } from "react-router-dom"

const Buttons = props => {
    const { textButton, iconButton, navigateTo } = props

    return (
        <Link to={ navigateTo }>
            <button
                className='flex items-center gap-4 font-semibold text-3xl text-black bg-gradient-to-r from-[#14CCAB] to-[#00FFD1] rounded-full px-8 py-1'
            >
                { textButton }{ iconButton }
            </button>
        </Link>
    )
}

export default Buttons
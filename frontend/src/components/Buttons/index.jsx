const Buttons = props => {
    const { textButton, iconButton } = props

    return (
        <button className='font-semibold text-2xl text-black bg-gradient-to-r from-[#14CCAB] to-[#00FFD1] rounded-full px-8 py-1'>
            { textButton }{ iconButton }
        </button>
    )
}

export default Buttons
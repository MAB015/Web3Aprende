import Layout from "../../components/Layout"

const CardUnits = () => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex items-center gap-8 w-96'>
                <p className='text-2xl'>U1</p>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>Antes de Web3 y Blockchain</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                </div>
            </div>
            <div className='flex flex-row-reverse items-center gap-8 w-96'>
                <p className='text-2xl'>U2</p>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>Antes de Web3 y Blockchain</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                </div>
            </div>
            <div className='flex items-center gap-8 w-96 text-white'>
                <p className='text-2xl'>U3</p>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>Antes de Web3 y Blockchain</h2>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod. </p>
                </div>
            </div>
        </div>
        
    )
}

export default CardUnits
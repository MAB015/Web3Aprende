import Buttons from '../Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Contenido = () => {
    return(
        <div className='flex gap-4 text-black w-full py-8 h-screen '>
            <div className='bg-slate-300 opacity-85 rounded-2xl p-8 w-1/5 text-md'>
                <ul className='flex flex-col gap-8'>
                    <li className='border-b border-gray-500 py-2 cursor-pointer text-lg font-semibold'>
                        <h3>Contenido 1</h3>    
                    </li>
                    <li className='border-b border-gray-500 py-2 cursor-pointer hover:text-lg hover:font-semibold'>
                        <h3>Contenido 2</h3>    
                    </li>
                    <li className='border-b border-gray-500 py-2 cursor-pointer hover:text-lg hover:font-semibold '>
                        <h3>Contenido 3</h3>    
                    </li>
                    <li className='border-b border-gray-500 py-2 cursor-pointer hover:text-lg hover:font-semibold '>
                        <h3>Pregunta 1</h3>    
                    </li>
                    <li className='border-b border-gray-500 py-2 cursor-pointer hover:text-lg hover:font-semibold '>
                        <h3>Pregunta 2</h3>    
                    </li>
                </ul>
            </div>
            <div className='flex flex-col contenido gap-16 bg-slate-300 opacity-85 rounded-2xl p-8 overflow-y-auto'>
                <h2 className='text-4xl font-semibold'>
                    Contenido 1
                </h2>
                <p className='text-3xl font-montserrat pl-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod.</p><p className='text-3xl font-montserrat pl-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus gravida rutrum. Mauris egestas luctus euismod.</p>
                </div>
            <div className='fixed bottom-20 right-40 shadow-md shadow-green-500 rounded-full'>
                <Buttons
                    textButton='Siguiente'
                    iconButton={<FontAwesomeIcon icon={ faRightLong } className='h-8' />}
                    navigateTo='/conectado'
                />
            </div>
        </div>
    )
}

export default Contenido
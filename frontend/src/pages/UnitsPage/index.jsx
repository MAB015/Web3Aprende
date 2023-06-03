import Layout from '../../components/Layout'
import Contenido from '../../components/Contenido'
import Footer from '../../components/Footer'
import './styles.css'

const UnitsPage = () => {
    return(
        <Layout>
            <div className='flex flex-col container items-center w-full'>
                <h1 className='text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#14CCAB] to-[#00FFD1] mt-16'>UNIDADES</h1>
                <Contenido />
            </div>
            <Footer />
        </Layout>
    )
}

export default UnitsPage
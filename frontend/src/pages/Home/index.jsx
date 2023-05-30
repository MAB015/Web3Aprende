import Layout from '../../components/Layout'
import CardUnits from '../../components/CardUnits'

function Home (){
    return(
        <Layout>
            <h1 className='text-red-500'> Bienvenido a Web3Aprende</h1>
            <CardUnits />
        </Layout>
    )
}

export default Home
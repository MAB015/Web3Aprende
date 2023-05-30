import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import CardUnits from '../../components/CardUnits'
import Comunidad from '../../components/Comunidad'
import Footer from '../../components/Footer'

function Home (){
    return(
        <Layout>
            <Hero />
            <CardUnits />
            <Comunidad />
            <Footer />
        </Layout>
    )
}

export default Home
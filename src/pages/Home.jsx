import Carousel from '../components/Carousel'
import MidBanner from '../components/MidBanner'
import Features from '../components/Features'
import Retry from '../components/Retry'


const Home = () => {
  return (
    <>
      <Carousel/>
      <MidBanner />
      <Features />
      <Retry onRetry={() => alert('Retrying...')} />  
    </>
  )
}

export default Home
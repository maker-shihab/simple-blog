import FAQs from '../../components/FAQs';
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Velues from '../../components/Velues';
import './home.css';

const Home = () => {
  return (
    <main>
      <MainHeader/>
      <Programs/>
      <Velues/>
      <FAQs/>
      <Testimonials/>
    </main>
  )
}

export default Home
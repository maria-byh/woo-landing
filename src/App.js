import Header from './components/Header/Header'
import SecondSection from './components/SecondSection/SecondSection'
import ThirdSection from './components/ThirdSection/ThirdSection'
import FourthSection from './components/FourthSection/FourthSection'
import FifthSection from './components/FifthSection/FifthSection'
import Footer from './components/Footer/Footer'
import './components/font/style.css'

function App() {
  return (
    <div className="absolute font-Roboto">
      <Header />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}

export default App;

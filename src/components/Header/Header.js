import Navbar from './components/Navbar/Navbar';
import FirstSection from './components/FirstSection/FirstSection';
import w from './components/Vector.png';

const Header = () => {
    return ( 
        <div className="text-cnb" style={{
            backgroundImage: "linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%)",
        }}>
            <img className="absolute z-0 right-0" src={w} alt="img"/>
            <Navbar />
            <FirstSection />
        </div>
     );
}
 
export default Header;
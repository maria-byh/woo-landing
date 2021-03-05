import Top from './Top'
import twitter from './imgs/twitter.svg'
import facebook from './imgs/facebook.svg'
import wifi from './imgs/wifi.svg'
import instagram from './imgs/instagram.svg'
import logo from './imgs/lg.svg'

const Footer = () => {
    return ( 
        <div>
            <Top />
            <footer className='h-16 flex items-center justify-around'>
                <div className='flex w-80 justify-evenly'>
                    <a href='#'><img src={twitter} alt="img"/></a>
                    <a href="#"><img src={facebook} alt="img"/></a>
                    <a href="#"><img src={wifi} alt="img"/></a>
                    <a href="#"><img src={instagram} alt="img"/></a>
                </div>
                <a href="#">COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</a>
                <img src={logo} alt="img"/>
            </footer>
        </div>
    );
}
 
export default Footer;
import logo from './imgs/LOGO.svg'
import i from './imgs/Union.svg'
import j from './imgs/Union2.svg'
import h from './imgs/Vector.svg'

const Top = () => {
    return ( 
        <div className='bg-cp text-white flex flex-col items-center py-14'>
            <div className='flex justify-evenly text-xl tracking-wide w-full pb-36'>
                <div className='flex items-center'>
                    <img className='mr-5' src={h} alt="img"/>
                    <p>30 day <span className='font-semibold'>money back guarantee</span></p> 
                </div>
                <div className='flex items-center'>
                    <img className='mr-5' src={i} alt="img"/>
                    <p><span className='font-semibold'>Support </span>teams across the world</p> 
                </div>
                <div className='flex items-center'>
                    <img className='mr-5' src={j} alt="img"/>
                    <p><span className='font-semibold'>Safe & Secure </span>online payment</p>
                </div>
            </div>
            <img src={logo} alt="img"/>
            <hr className='bg-white w-5/6 my-20'/>
            <div className='flex justify-evenly w-full'>
                <ul className='text-sm leading-10'>
                    <h4 className='text-base font-semibold mb-5'>Who we Are</h4>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Team</a></li>
                    <li><a href='#'>Work With Us</a></li>
                </ul>
                <ul className='text-sm leading-10'>
                    <h4 className='text-base font-semibold mb-5'>Woocommerce</h4>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Extension Store</a></li>
                    <li><a href="#">eCommerce blog</a></li>
                    <li><a href="#">Development blog</a></li>
                    <li><a href="#">Ideas board</a></li>
                    <li><a href="#">Mobile App</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Style Guide</a></li>
                    <li><a href="#">Email Newsletter</a></li>
                </ul>
                <ul className='text-sm leading-10'>
                    <h4 className='text-base font-semibold mb-5'>Other products</h4>
                    <li><a href="#">Storefront</a></li>
                    <li><a href="#">WooSlider</a></li>
                    <li><a href="#">Sensei</a></li>
                    <li><a href="#">Sensei Extensions</a></li>
                </ul>
                <ul className='text-sm leading-10'>
                    <h4 className='text-base font-semibold mb-5'>Support</h4>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Customizations</a></li>
                    <li><a href="#">Support Policy</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">COVID-19 Resources</a></li>
                    <li><a href="#">Privacy Notice for</a></li>
                    <li><a href="#">California Users</a></li>
                </ul>
                <ul className='text-sm leading-10'>
                    <h4 className='text-base font-semibold mb-5'>We recommend</h4>
                    <li><a href="#">WooExperts</a></li>
                    <li><a href="#">Hosting Solutions</a></li>
                    <li><a href="#">Pre-sales FAQ</a></li>
                    <li><a href="#">Success Stories</a></li>
                    <li><a href="#">Design Feedback Group</a></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Top;
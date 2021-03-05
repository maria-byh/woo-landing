import a from './imgs/Group 22.svg';
import b from './imgs/Group 23.svg';
import c from './imgs/Group 24.svg';


const SecondSection = () => {
    return ( 
        <div className='font-Roboto flex flex-col items-center'>
            <h2 className='text-6xl font-bold text-cnb font-circular text-center'>Your eCommerce <br/>made simple</h2>
            <div className='flex'>
                <div className='flex flex-col items-center'>
                    <img src={a} alt='img'/>
                    <div>
                        <h3 className='text-4xl font-bold text-cnb font'>All You Need to Start</h3>
                        <p className='text-lg text-cg'>Add WooCommerce plugin to any WordPress site and <br/>set up a new store in minutes.</p>
                        <a className='text-lg text-cb font-bold' href="#">Ecommerce for Wordpress ›</a>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={b} alt='img'/>
                    <div>
                        <h3  className='text-4xl  font-bold text-cnb font'>Customize and Extend</h3>
                        <p className='text-lg text-cg'>From subscriptions to gym classes to luxury cars, <br/>WooCommerce is fully customizable.</p>
                        <a className='text-lg text-cb font-bold' href="#">Browse Extensions ›</a>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={c} alt='img'/>
                    <div>
                        <h3  className='text-4xl  font-bold text-cnb font'>Active Community</h3>
                        <p className='text-lg text-cg'>WooCommerce is one of the fastest-growing <br/>eCommerce communities. </p>
                        <a  className='text-lg text-cb font-bold' href="#">Check our Forums ›</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SecondSection;
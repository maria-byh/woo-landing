import bg from './imgs/section.svg';
import t from './imgs/section1.svg';
import b from './imgs/section2.svg';
import Button from './components/Button';
const ThirdSection = () => {
    return (  
        <div className='relative pt-12 pb-20 my-40'>
            <div className='font-Roboto  text-white tracking-wide leading-10'>
                <div className='absolute flex items-center left-1/6 top-0'>
                    <img src={t} alt='img'/> 
                    <div className='pl-10'>
                        <h3 className='text-4xl font-bold font-circular'>Develop <br/>Without Limits</h3>
                        <p className='text-lg py-10'>WooCommerce is developer friendly, too. Built with a REST <br/>
                        API, WooCommerce is scalable and can integrate with <br/>
                        virtually any service. Design a complex store from scratch, <br/>
                        extend a store for a client, or simply add a single product to <br/>
                        a WordPress site—your store, your way.</p>
                        <Button/>
                    </div>
                </div>
                <div className='absolute flex items-center right-1/6 bottom-0'>
                    <div>
                        <h3 className='text-4xl font-bold font-circular'>Know our <br/>Global Community</h3>
                        <p className='text-lg py-10'>WooCommerce is one of the fastest-growing eCommerce <br/>
                        communities. We’re proud that the helpfulness of the <br/>
                        community and a wealth of online resources are frequently <br/>
                        cited as reasons our users love it. There are 80+ meetups <br/>worldwide!</p>
                        <Button/>
                    </div> 
                    <img src={b} alt='img'/>
                </div>
            </div>
            <img className='z-0 w-screen' src={bg} alt="img"/>
        </div>
    );
}
 
export default ThirdSection;
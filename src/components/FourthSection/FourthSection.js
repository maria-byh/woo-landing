import imgs from "./imgs/testimonials-section.svg";
import m from './imgs/m.svg'

const FourthSection = () => {
    return ( 
        <div className='relative flex items-center justify-center py-20'
            style={{
                backgroundImage: "linear-gradient(180deg, rgba(236, 240, 253, 0) 0%, rgba(236, 240, 253, 0.53) 14.32%, #ECF0FD 45.83%, rgba(236, 240, 253, 0.43) 84.33%, rgba(236, 240, 253, 0) 100%)",
            }}>
            <h2 className='absolute z-10 top-0 text-6xl font-bold text-cnb text-center  font-circular'>Trusted by Agencies <br/>& Store Owners</h2>
            <div className='absolute z-10 w-1/3 h-96 bg-white shadow-xl rounded-3xl flex items-center justify-center'>
                <p className='absolute z-10 text-2xl text-cg text-center font-normal tracking-wide leading-normal'>No other eCommerce platform allows people <br/> 
                    to start for free and grow their store as their <br/>
                    business grows. More importantly, <br/>
                    WooCommerce doesn't charge you a portion <br/>    
                    of your profits as your business grows!</p>   
                <img className='absolute top-6' src={m} alt="img"/>     
            </div>                
            <img className='z-0' src={imgs} alt="img"/>    
        </div>    
    );
}
 
export default FourthSection;
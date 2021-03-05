import n from './imgs/people-section.svg'

const FifthSection = () => {
    return ( 
        <div className='relative flex items-center flex-col'>
            <h2 className='text-6xl font-bold text-cnb text-center font-circular m-10'>Supported by real people</h2>
            <p className='text-xl text-cg text-center'>Our team of Happiness Engineers works remotely from 58 
            countries providing <br/>customer support across multiple time zones.</p>
            <img className='py-16' src={n} alt="img"/>
            <div className='absolute bottom-0 flex items-center justify-center bg-cnp h-64 text-white w-full'>
                <p className='text-4xl tracking-wide leading-relaxed'>WooCommerce - the <span className='font-bold'>most customizable eCommerce <br/>platform </span> 
                for building <span className='font-bold'> your online business.</span></p>
                <button className='rounded-full py-4 px-10 mx-14 border-4 font-medium' type='button'>
                GET STARTED   
                </button>
            </div>
        </div>
    );
}
 
export default FifthSection;
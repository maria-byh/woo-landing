

const Button = () => {
    return ( 
        <div className="flex items-center">
            <button className='rounded-full py-4 px-10 bg-cp text-white font-medium' type='button'>
                Start a New Store    
            </button> 
            <p className="ml-3 text-cg">or<a className="ml-3 text-cb text-lg font-bold" href="#">Customize & Extend ›</a></p>
        </div>
    );
}
 
export default Button;
import Sign from './Sign';

const Search = () => {
    return ( 
        <div className='absolute right-0 flex'>
            <Sign />
            <form className="relative rounded-full h-11 w-11 hover:w-60 hover:shadow-lg hover:bg-white ml-12" action="action_page.php">
                <input 
                    className='h-11 hidden' 
                    type="text" 
                    placeholder="Search.." 
                    name="search"
                />
                <button className='absolute right-0 h-11 w-11' type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>   
    );
}
 
export default Search;
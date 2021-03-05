import logo from './components/logo.svg';
import NavMenu from './components/NavMenu';
import Search from './components/Search';


const  Navbar = () => {
    return (  
        <div className="relative flex items-center h-28 mx-10 text-base font-medium">
            <img className="" src={logo} alt="img"/>
            <NavMenu />
            <Search />
        </div>
    );
}
 
export default Navbar;
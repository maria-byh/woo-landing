import img from './components/featured-image.svg';
import Text from './components/Text';

const FirstSection = () => {
    return ( 
        <div className="flex items-center">
            <Text />
            <img className="z-10" src={img} alt="img"/>
        </div>
     );
}
 
export default FirstSection;
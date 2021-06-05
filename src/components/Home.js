import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider'
import About_company from './About_company'
import Contacts from './Contacts'

function Home() {
    return (
        <div>
            <Slider></Slider>
            <About_company></About_company>
            <Contacts></Contacts>
        </div>
    );
}

export default Home;
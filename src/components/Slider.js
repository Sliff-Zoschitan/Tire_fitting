import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';

function Slider() {
    return (
        <div>
            <AwesomeSlider 
            bullets="true"
            play={true}
            cancelOnInteraction={false}
            interval={2000}>
                <div data-src="https://caferati.me/images/series/bojack-5.jpg" />
                <div data-src="https://caferati.me/images/series/bojack-3.jpg" />
                <div data-src="https://caferati.me/images/series/bojack-0.png" />
            </AwesomeSlider>
        </div>
    );
}

export default Slider;
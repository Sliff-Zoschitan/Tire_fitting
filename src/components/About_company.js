import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, ListGroup, Alert } from 'react-bootstrap';

function About_company() {
    return (
        <div>
            <ListGroup horizontal style={{ backgroundColor: '#eeeeee' }}>
                <ListGroup.Item className='border-0' horizontal style={{ backgroundColor: '#eeeeee' }}>

                    <Alert style={{ textAlign: 'left', marginLeft: '100px' }}>
                        <h1>О компании</h1>
                        <p>
                            Сеть «Шиномонтаж R16» оказывает услуги шиномонтажа с 2013 года. На сегодняшний день — это 30 павильонов и 1 автомойка с приятными ценами на услуги.

                            Наши клиенты получают услуги шиномонтажа наивысшего качества в комфортных современных павильонах. Мы работаем на новейшем оборудовании, которое позволяет быстро и качественно оказывать полный перечень шиномонтажных услуг любой сложности! Помимо предоставляемых услуг в нашей сети вы можете приобрести шины и диски от ведущих производителей.

                            За годы существования на рынке города Казани мы зарекомендовали себя с положительной стороны у наших клиентов – как физических, так и юридических лиц. Нас ценят, любят и рекомендуют уже более 100 000 постоянных и довольных клиентов!
            </p>

                    </Alert>
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{ marginRight: '50px', marginLeft: '100px', backgroundColor: '#eeeeee' }}>
                    <Image src="https://r16.online/_si/0/17594112.jpg" style={{ width: '250px', padding: '10px' }} />
                    <Image src="https://r16.online/_si/0/17594112.jpg" style={{ width: '250px', padding: '10px' }} />
                    <Image src="https://r16.online/_si/0/17594112.jpg" style={{ width: '500px', padding: '10px' }} />
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default About_company;
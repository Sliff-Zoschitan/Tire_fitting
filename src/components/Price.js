import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import { Table, Card, Accordion, Button} from 'react-bootstrap';
import Select from 'react-select'
import axios from 'axios';
import App from '../App'
import ReactDOM from 'react-dom'

axios.get("https://tire-fitting.herokuapp.com//serviceWithoutTire").then(response=>{
    console.log(response);
}).catch((error)=>{
    console.error(error);
});

const prices = [
    [80, 80, 80, 960, 200, 700, 200, 550, 850],
    [90, 90, 90, 1080, 200, 800, 250, 650, 950],
    [100, 100, 100, 1200, 300, 1000, 300, 750, 1050],
    [120, 120, 120, 1440, 300, 1200, 350, 950, 1250],
    [140, 140, 140, 1680, 400, 1400, 400, 1150, 1450],
    [160, 160, 160, 1920, 400, 1600, 450, 1350, 1650],
    [180, 180, 180, 2160, 400, 1600, 500, 1450, 1750],
    [180, 180, 180, 2160, 400, 1600, 500]
]

const options = [
    { value: 0, label: 'R12-R13' },
    { value: 1, label: 'R14' },
    { value: 2, label: 'R15' },
    { value: 3, label: 'R16, R14-R15Д' },
    { value: 4, label: 'R17-R18, R16-R17Д' },
    { value: 5, label: 'R19-R20, R18-R19Д' },
    { value: 6, label: 'R21-R22, R20-R21Д' },
    { value: 7, label: 'Газель' }
]
const options2 = [
    { value: 0, label: 'R12-R13' },
    { value: 1, label: 'R14' },
    { value: 2, label: 'R15' },
    { value: 3, label: 'R16, R14-R15Д' },
    { value: 4, label: 'R17-R18, R16-R17Д' },
    { value: 5, label: 'R19-R20, R18-R19Д' },
    { value: 6, label: 'R21-R22, R20-R21Д' }
]

let per = options[2];

let services = new Array();
services.push({ id: '1', price: 80, title: 'Снятие / установка колёс' });
services.push({ id: '2', price: 80, title: 'Шиномонтаж' });
services.push({ id: '3', price: 80, title: 'Балансировка' });
services.push({ id: '4', price: 960, title: 'Комплексная перекидка' });
services.push({ id: '5', price: 200, title: 'Ремонт заплаткой' });
services.push({ id: '6', price: 700, title: 'Ремонт бокового пореза' });
services.push({ id: '7', price: 200, title: 'Ремонт стального диска' });
services.push({ id: '8', price: 550, title: 'Ремонт литого диска' });
services.push({ id: '9', price: 850, title: 'Ремонт кованого диска' });

const OnChangeSelect = (serviceid, e) => {
    let id = parseInt(serviceid) - 1;
    services[id]['price'] = prices[e.value][id];
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

function Price() {
    return (
        <div>
            <br />
            <br />
            <Accordion defaultActiveKey="0">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Название услуги</th>
                            <th>Цена</th>
                            <th>Шина</th>
                            <th>Показать подробнее</th>
                        </tr>
                    </thead>
                    
                        {services.map(service => (
                            <tbody>
                                <tr>
                                    <th>{service['title']}</th>
                                    <th>{service['price']}</th>
                                    <th>
                                        
                                        <Select defaultValue={options[0]} options={(service['title'] == "Ремонт литого диска" || service['title'] == "Ремонт кованого диска") ? options2 : options} onChange={(e) => OnChangeSelect(service['id'],e)} />
                                    </th>
                                    <th>
                                        <Accordion.Toggle eventKey={service['id']}>
                                            Показать подробнее
                                        </Accordion.Toggle>
                                    </th>
                                </tr>
                                <tr>
                                    <Accordion.Collapse eventKey={service['id']}>
                                        <Card.Body>Подробности</Card.Body>
                                    </Accordion.Collapse>
                                </tr>
                            </tbody>
                        ))}
                        
                    
                </Table>
                    
                    
                
            </Accordion>
            <br/>
            <br />
            <br />
            <br />
            
        </div>
    );
}

export default Price;
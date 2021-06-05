import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown, Image} from 'react-bootstrap';

const navStyle = {
    marginLeft: '30px',
    fontSize: '20px'
};
const alGoldStyle = {
    backgroundColor: '#dfba35',
    fontSize: '20px',
    color: '#ffffff'
};
function Header() {
    return(
        <div>
            <Navbar bg="light" className="justify-content-center">
                <Nav>
                    <Nav.Link href="price" style={navStyle}>Услуги и цены</Nav.Link>
                    <Nav.Link href="tires" style={navStyle}>Шины и диски</Nav.Link>
                    <Nav.Link href="reviews" style={navStyle}>Оставить отзыв</Nav.Link>
                    <Nav.Link href="contacts" style={navStyle}>Контакты</Nav.Link>
                    <NavDropdown onMouseEnter={(e) => document.getElementById("idofthiselement").click()} onMouseLeave={(e) => document.getElementById("idofthiselement").click()} title="Others" id="idofthiselement" title="О компании" style={navStyle}>
                        <NavDropdown.Item href="action/3.1">Вакансии</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.2">Новости</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.3">Корпоративным клиентам</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="dark" style={{ marginLeft: 100 }}>Посмотреть адреса</Button>
                </Nav>
            </Navbar>
            <Navbar className="justify-content-center" style={alGoldStyle}>
                <Navbar.Brand style={{ color: 'HighlightText' }}>С любовью к вашему автомобилю</Navbar.Brand>
                <Navbar.Brand style={{ color: 'HighlightText', marginLeft: '500px' }}>Работаем круглосуточно</Navbar.Brand>
            </Navbar>
            <Navbar bg="dark" className="justify-content-center" variant="dark">
                <Nav.Link href='/'>
                    <Image src="https://r16.online/images/logotip111.png" style={{ width: '250px' }}/>
                </Nav.Link>
                <Navbar.Brand style={{ color: 'HighlightText', fontSize: '16px', marginLeft: '30px' }}>Звоните! Проконсультируем какие работы необходимо выполнить <br />
срочно, а с чем можно и подождать, ответим по всем вопросам.</Navbar.Brand>
                <Navbar.Brand style={{ marginLeft: '100px' }}>+7 (843) 260-06-60</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Header;
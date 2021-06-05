import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, NavDropdown, Image } from 'react-bootstrap';
import { Icon36LogoVk, Icon24LogoInstagram } from '@vkontakte/icons';

function Bottom_panel() {
    return (
        <div className="App">
            <Navbar bg="dark" className="justify-content-center">
                <Navbar.Brand style={{ color: 'HighlightText' }}>© 2013-2021 Сеть «Шиномонтаж R16»</Navbar.Brand>
                <Navbar.Brand style={{ color: 'HighlightText', marginLeft: '150px', marginRight: '300px' }}>Разработано в — retailo</Navbar.Brand>
                <Navbar.Brand href='https://vk.com/shinomontazh_kazan_r16'>
                    <Icon36LogoVk style={{ color: 'HighlightText' }} width={30} height={30} />
                </Navbar.Brand>
                <Navbar.Brand href='https://vk.com/shinomontazh_kazan_r16'>
                    <Icon24LogoInstagram style={{ color: 'HighlightText' }} width={30} height={30} />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Bottom_panel;



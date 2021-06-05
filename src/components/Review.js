import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Card, ListGroup, Image, Nav } from 'react-bootstrap';

function Review() {
    return (
        <div>
            <Card bg='Light' style={{marginBottom:'20px'}}>
                <Card.Header >
                    <Nav>
                        <Nav.Item >
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png" roundedCircle style={{ width: '30px' }} />
                        </Nav.Item>
                        <Nav.Item style={{ marginLeft: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                            Амогус
                            </Nav.Item>
                        <Nav.Item style={{ marginBlock: 'auto', marginLeft: '10px' }} >
                            10.12.1321
                            </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Text style={{ textAlign: 'left', textIndent: '1.5em' }}>
                        Какой-то там отзыв ааааааааа аааааааааааааааааааа
                        ааааааа ааааааааа аааааааааа аааааааааа ааааааааааа
                        ааааааааааааааааааааа ааааааааааааааааа ааааааааааааааааа аааааааааааааааааааааааааа
                        аааааааааааааааа ааааааааааааа ааааааааааа аааааааааааа ааааааааааааааааааааааааааааа
                        </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Review;
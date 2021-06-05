import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Review'
import { Alert, Pagination, ListGroup, Image, Button, Form} from 'react-bootstrap';

const formStyle = {
    marginTop: '10px',
    marginBottom: '10px'
};

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === 1}>
            {number}
        </Pagination.Item>,
    );
}

const paginationBasic = (
    <div>
        <Pagination>{items}</Pagination>
    </div>
);

//render(paginationBasic);

function Reviews() {
    return (
        <div>
            <div style={{ width: "80%", display: 'block', marginLeft: 'auto', marginRight: 'auto', textAlign: 'left'}}>
                <br />
                <h1>Отзывы</h1>
                <br />
                <Alert style={{ backgroundColor: '#dfba35', textAlign:'left', fontSize:'16px', color:'white' }}>Показано 1-4 из 4 сообщений</Alert>
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
                {paginationBasic}
                <br/>
                <hr />
                <br />

                <h2>Написать отзыв</h2>
                <br/>
                <Form>
                    <div style={formStyle}>
                        <Form.Check inline label="Гость" name="group1" type='radio' id='1' />
                        <Form.Check inline label="НеГость" name="group1" type='radio' id='1' />
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={formStyle}>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="dark" style={formStyle}>
                        Отправить
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Reviews;
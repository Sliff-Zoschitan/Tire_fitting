import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleMap from './Maps'
import {ListGroup, Alert, Button } from 'react-bootstrap';

function Contacts() {
    return (
        <div>
            <ListGroup horizontal >
                <ListGroup.Item className='border-0' horizontal>

                    <Alert style={{ textAlign: 'left', marginLeft: '100px' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <h1>Контакты</h1>
                                <br /><br />
                Офис
                <br />
                                <br />
                                <p style={{ fontWeight: 'bold' }}>
                                    ул. Декабристов 85Б, офис 904
                <br />
                Телефон: 8 (843) 2-600-660
                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>
                                    Удобные подъездные пути к каждому шиномонтажу. Все адреса наших шиномонтажей с номерами телефона для записи доступны по кнопке ниже
                </p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant='dark' style={{ borderRadius: '40px', fontSize: '20px', backgroundColor: '#dfba35' }}>Посмотреть все адреса</Button>
                            </ListGroup.Item>
                        </ListGroup>


                    </Alert>
                </ListGroup.Item>
                <ListGroup.Item className='border-0' style={{ marginRight: '50px', marginLeft: '100px' }}>
                    <SimpleMap></SimpleMap>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Contacts;
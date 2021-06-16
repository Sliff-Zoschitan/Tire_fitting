import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import App from '../App'
import { Navbar, Button, ListGroup } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { Alert } from 'bootstrap';

let b1=0,b2=0,b3=0;
let butts1 = new Array(3);
let butts2 = new Array(3);
let butts3 = new Array(3);

for(let i1=0;i1<3;i1++){
    butts1[i1] = i1.toString();
    butts2[i1] = new Array(3);
    butts3[i1] = new Array(3);
    for (let i2 = 0; i2 < 3; i2++) {
        butts2[i1][i2] = i1.toString() + i2.toString();
        butts3[i1][i2] = new Array(5);
        for (let i3 = 0; i3 < 5; i3++) {
            butts3[i1][i2][i3] = i1.toString() + i2.toString() + i3.toString();
        }
    }
}

const One = (value) => {
    b1 = parseInt(value);
    b2 = 0;
    b3 = 0;
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
const Two = (value) => {
    b2 = parseInt(value) % 10;
    b3 = 0;
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
const Three = (value) => {
    b3 = parseInt(value) % 10;
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

function Comp() {
    return (
        <div>
            <Navbar className="justify-content-center">
                {butts1.map(butt => (
                    <Button variant="dark" value={butt} onClick={() => One(butt)} style={{ marginLeft: 100, width: '200px' }}>{butt}</Button>
                ))}
            </Navbar>
            <Navbar className="justify-content-center">
                {butts2[b1].map(butt => (
                    <Button variant="danger" value={butt} onClick={() => Two(butt)} style={{ marginLeft: 100, width: '200px' }}>{butt}</Button>
                ))}
            </Navbar>
            <ListGroup horizontal>
                <ListGroup>
                    {butts3[b1][b2].map(butt => (
                        <Button variant="success" value={butt} onClick={() => Three(butt)} style={{ marginTop: 20, width: '200px' }}>{butt}</Button>
                    ))}
                </ListGroup>
                <p style={{ marginLeft: '400px', marginTop: '100px' , fontSize:'100px'}}>{butts3[b1][b2][b3]}</p>
            </ListGroup>
            
        </div>
    );
}

export default Comp;
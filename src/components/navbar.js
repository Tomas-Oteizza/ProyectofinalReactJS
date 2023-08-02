import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CartWidgets from "./CartWidgets";

function Navbar () {
    return (
        <div className="header">

            <div className="navbar">
                <h1>CeluStore</h1>

                <ButtonGroup>
                <Button variant = "dark" >ofertas</Button>
                <Button variant = "dark">recomendaciones</Button>

                <DropdownButton as={ButtonGroup} title="categorias" id="bg-nested-dropdown" variant = "warning">
                <Dropdown.Item eventKey="celulares">celulares</Dropdown.Item>
                <Dropdown.Item eventKey="fundas">fundas</Dropdown.Item>
                <Dropdown.Item eventKey="vidrios templados">vidrios templados</Dropdown.Item>                
                <Dropdown.Item eventKey="cargadores">cargadores</Dropdown.Item>
                <Dropdown.Item eventKey="auriculres">auriculares</Dropdown.Item>
                </DropdownButton>
                </ButtonGroup>   
            </div>
            
            <CartWidgets/>
        </div>
    );
}

export default Navbar;
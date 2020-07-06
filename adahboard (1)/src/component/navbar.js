import  React  from  'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,} from 'react-bootstrap';

function  Navbars(){
	
	return ( 
	<div>
		<Navbar bg="dark" variant="dark" style={{backgroundColor:"black"}}>
			<Navbar.Brand href="#home" style={{color:"red",fontFamily:"terminator"}}>WHIRLYBIRD</Navbar.Brand>
			<Nav className="mr-auto">
			<Nav.Link href="#home">Dashboard</Nav.Link>
			<Nav.Link href="#features">Report</Nav.Link>
			</Nav>
		</Navbar>

    </div>
);
}


export default  Navbars
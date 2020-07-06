import  React  from  'react'
import './dasboard.css';
import $ from'jquery';
import ReactDOM from 'react-dom';
import { Container, Row, Col,DropdownButton, Dropdown,Card} from 'react-bootstrap';


function  Dashboard(){
    
 const changeText = () => {

 }   
	return ( 
<div>
<Container fluid>

    <Row style={{margin:"0px",paddingTop:"2px"}}>
      
    <Col lg={12}>
    
        <Row>
            <Col lg={5} style={{backgroundColor:"#d9ffb3" ,height:"63px", borderTopLeftRadius: "15px",borderBottomLeftRadius: "15px"}}>
                <h2  className="getdisplay" id="selection" style={{padding:"8px",margin:"0px",textAlign:"left",}}>Total Load</h2>
            </Col>
            <Col lg={4} style={{backgroundColor:"#d9ffb3" ,height:"63px", }}>
                <Card  style={{marginTop:"15px"}}> 
                    <input type="date" id="mydate"   placeholder="dd/mm/yyyy" style={{fontSize:"20px",textAlign:"left"}}></input>
                </Card>
            </Col>
            <Col lg={3}  style={{backgroundColor:"#d9ffb3" ,padding:"10px",height:"63px", borderTopRightRadius: "15px",borderBottomRightRadius: "15px"}}>
                <DropdownButton  id="dropdown-basic-button" title="Select" style={{textAlign:"right"}}>
                    <Dropdown.Item href="#/action-1" onClick={changeText}>Total Load</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Operating %</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Solar vs Grid</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>

    
    </Col>
   
    </Row>
    
</Container>   
</div>
);

}


export default  Dashboard
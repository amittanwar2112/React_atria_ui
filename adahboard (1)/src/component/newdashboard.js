import React, { Component } from 'react'
import './dasboard.css';
import Dashboard from './dashboard'
import { Container, Row, Col,Card } from 'react-bootstrap';

class Newdashboard extends Component {
  constructor(props) {
        super(props);
        this.data= [];
      }
  componentDidMount() {
    
    let xhr = new XMLHttpRequest();
    let url = 'http://13.233.236.200:5000/zeDashData?site_id=2&date=2020-06-20';
    console.log(url);
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => this.populateTotalData(xhr.response);

      }
    populateTotalData(chartDataStr){
        this.data = JSON.parse(chartDataStr);
        console.log(this.data);
        document.getElementById("INCOMER").innerHTML ="Operating %"+"<br/>"+ this.data.op_percent + "<br/> " +"Solar Total"+"<br/> "+ this.data.solar_total.toFixed(2) +"<br/>"+"kW";
      
        document.getElementById("INCOMER2").innerHTML = "Grid Total"+ "<br/>"+"<br/>"+ this.data.grid_total.toFixed(2)+"<br/>"+"kW";
        document.getElementById("TOTAL").innerHTML = "Total Load"+"<br/>"+"<br/>"+this.data.total_load.toFixed(2)+"<br/>"+"kW";

    } 
  render() {
    return (
<div>
        
<Container fluid>
<Row style={{margin:"0px",paddingTop:"8px"}}>
<Col lg={6}>
<Card>
    <div className="top-container" >
      <div className="top-inner-container">

        <div className="panel-container">

          <p className="panel-heading">SOLAR</p>
          <div className="blue-panel" id="INCOMER">

          </div>
        </div>

        <div className="panel-container">
          <p className="panel-heading">GRID</p>
          <div className="blue-panel" id="INCOMER2">

          </div>
        </div>

      </div>

      <div className="top-inner-container-2">
        <div className="panel-container">
          <p className="panel-heading mb-5" >
            Total Load <br />
            (SOLAR + GRID)
          </p>
          <div className="black-panel" id="TOTAL">

          </div>
        </div>
      </div>
    
    </div> 
  </Card>
</Col>

<Col lg={6}>
    
<Dashboard></Dashboard>
    
</Col>

</Row>
</Container>
    

</div>


  

    )
  }
}

export default Newdashboard

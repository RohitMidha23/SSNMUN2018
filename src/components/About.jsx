import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="images/ssnlogo.jpg" className="header-image" rounded />
        <Grid>
            <Image src="images/logo.jpg" className="about-logo-pic" rounded />
            <h3>SSNMUN</h3>
            <p>SSNMUN is entering its 8th edition and is conducted by SSN college of Engineering, Anna University on Sept 15,16, 17</p>
        </Grid>
      </div>
    )
  }
}
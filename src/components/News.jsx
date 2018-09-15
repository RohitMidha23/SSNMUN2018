import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="images/logo.jpg" className="header-image" />
        <Grid>
            <h2>News</h2>
            <p>Watch this space for any news</p>
        </Grid>
      </div>
    )
  }
}
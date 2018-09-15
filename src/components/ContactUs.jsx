import React, { Component } from 'react' 
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './ContactUs.css';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ScrollUpButton from 'react-scroll-up-button';

export default class ContactUs extends Component {

      constructor(props) {
            super(props);
            this.state = { 
             checking:false
          };
            this.setbgimg = this.setbgimg.bind(this);
        }

        directions(){
              const url="https://www.google.com/maps/dir//SSN+College+of+Engineering,+Old+Mahabalipuram+Road,+Kalavakkam,+Tamil+Nadu+603110,+India/@12.8556778,80.1362424,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3a52512f04729e11:0xbc4ea0ae50ca1aaa!2m2!1d80.1972702!2d12.7508651!3e0";
              window.open(url, '_blank');
        }

      setbgimg(){
            var screenWidth = window.innerWidth;
            if( screenWidth < 768 ){
            // Load mobile image
            return(
                  <View>
              <div class="section" style={{height:"100%", width: "100%", marginTop: "5em"}}>

        </div>
        <ScrollUpButton />
            <Grid id="whole">
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", background: "url('images/hd2flippedmob.jpg')"}}><p style={{color: "black", textAlign:"center"}}>
            <h3 style={{color: "black"}}><b>Secretary General</b></h3> Anand Subramanian <br></br>(+91 94450 99746) </p>
            </div>
            <div className="col-lg-12"><br></br></div>
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", background: "url('images/hd2flippedmob.jpg')"}}><p style={{color: "black", textAlign:"center"}}>
            <h3 style={{color: "black"}}><b>Deputy<br></br> Secretary General</b></h3> Ganapathi Ramanathan <br></br>(+91 90031 34586) </p>
            </div>
            <div className="col-lg-12"><br></br></div>
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", textAlign:"center",background: "url('images/hd2flippedmob.jpg')"}}><h3 style={{color: "black"}}><b>How to get to<br></br> SSN MUN 2018</b></h3>
            <Image src="/images/maploc.png" style={{width:"100px", height:"100px", cursor:"pointer"}} onClick={() => this.directions()}/><br></br><br></br>
            </div>
            </Grid>
        <div><br></br><br></br><br></br></div>
        <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
                  </View>
            );
            }
            else{
                  return(
                        <View>
                              <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        position= "relative"
        source={{uri: 'images/hd2flipped.jpg'}}
        style={{width: '100%', height: '100%', marginTop:"-1em", opacity: 0.9}} >
              <div class="section" style={{height:"100%", width: "100%", marginTop: "3em"}}>
                      <div><br></br><br></br></div>
        </div>
        <ScrollUpButton />
            <Grid id="whole">
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", backgroundColor: "#C2BFBA"}}><p style={{color: "black", textAlign:"center"}}>
            <h3 style={{color: "black"}}><b>Secretary General</b></h3> Anand Subramanian <br></br>(+91 94450 99746) </p>
            </div>
            <div className="col-lg-12"><br></br></div>
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", backgroundColor: "#C2BFBA"}}><p style={{color: "black", textAlign:"center"}}>
            <h3 style={{color: "black"}}><b>Deputy Secretary General</b></h3> Ganapathi Ramanathan <br></br>(+91 90031 34586) </p>
            </div>
            <div className="col-lg-12"><br></br><br></br></div>
            <div className="col-lg-6 col-lg-offset-3" style={{border: "thick solid black", textAlign:"center", backgroundColor: "#C2BFBA"}}><h3 style={{color: "black"}}><b>How to get to SSN MUN 2018:</b></h3>
            <Image src="/images/maploc.png" style={{width:"100px", height:"100px", cursor:"pointer"}} onClick={() => this.directions()}/>
            </div>
            </Grid>
        <div><br></br><br></br><br></br></div>
        </ImageBackground>
        <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
                        </View>
                  );
            }

      }

  render() {
        return (
          <View>
                {this.setbgimg()}
      
        </View>
        )
    }
}
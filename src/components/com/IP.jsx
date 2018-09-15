import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import ScrollUpButton from 'react-scroll-up-button';
import WhenInView from '../WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './DISEC.css';

export default class ip extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
    }
    setbgimg()
    {
        var screenWidth = window.innerWidth;
      if( screenWidth < 768 ){

        // Load mobile image
        return (
            <View style={{marginTop: "4em"}}>
                <ScrollUpButton />
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "black", textAlign:"center"}} id="heading"><b>International Press</b></h2></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{ background: "url('../images/com/IPbgmflipped.jpg')", border:"thick solid black"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                “I still believe that if your aim is to change the world, journalism is a more immediate short term weapon” <br></br>- Tom Stoppard<br></br><br></br>
                </p>
                <p style={{color: "white"}} id="letter">
                Ladies and Gentlemen,<br></br><br></br>

Presenting to you, the final committee of SSN MUN 2018 - The International Press.<br></br><br></br>

The International Press is extremely vital in analyzing the direction that the council proceeds with, with its set of well-versed journalists/reporters, who act as both vital stakeholders in the proceedings of the council.<br></br><br></br>
They serve as an apt example of an instance when the pen is mightier than a sword and you can be rest assured that you will be held accountable for anything you say in committee.<br></br>
With their frequent interviews, opinion polling sessions and press conferences, they help bring accountability to the stances and statements taken up countries in a council .<br></br><br></br>
The IP also consists of photographers, a much needed aspect for its functioning, covering the moments in committee as discussion unfold, capturing the vital moments that define it. <br></br>
                </p>
                <br></br></div>
                

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}} id="heading"><b><h4 style={{color: "white", textAlign:"center"}}>Head of IP</h4></b><Image src="../images/ip/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Keerthishree Raghu</p> <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}} id="heading"><b><h4 style={{color: "white", textAlign:"center"}}>Editor in Chief</h4></b><Image src="../images/ip/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Tulica Bhattacharya</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}} id="heading"><b><h4 style={{color: "white", textAlign:"center"}}>Head of photography</h4></b><Image src="../images/ip/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Keerthivasan</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
      <div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
      <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
            </View>
        )

      }
      else {
        return (
        <View>
        <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/IPbgm.jpg'}}
        style={{width: '100%', height: '100%', marginTop: "2em"}}>
                <ScrollUpButton />
                <div><br></br><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h1 style={{color: "white", textAlign:"center"}} id="heading">International Press</h1></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/IPbgmflipped.jpg')"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                “I still believe that if your aim is to change the world,journalism is a more immediate short term weapon” <br></br>- Tom Stoppard<br></br><br></br>
                    </p><p style={{color: "white"}} id="letter">
Ladies and Gentlemen,<br></br><br></br>

Presenting to you, the final committee of SSN MUN 2018 - The International Press.<br></br><br></br>

The International Press is extremely vital in analyzing the direction that the council proceeds with, with its set of well-versed journalists/reporters, who act as both vital stakeholders in the proceedings of the council.<br></br><br></br>
They serve as an apt example of an instance when the pen is mightier than a sword and you can be rest assured that you will be held accountable for anything you say in committee.<br></br>
With their frequent interviews, opinion polling sessions and press conferences, they help bring accountability to the stances and statements taken up countries in a council .<br></br><br></br>
The IP also consists of photographers, a much needed aspect for its functioning, covering the moments in committee as discussion unfold, capturing the vital moments that define it. <br></br>
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}>Head of IP</h4><Image src="../images/ip/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Keerthishree Raghu</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}>Editor in Chief</h4><Image src="../images/ip/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Tulica Bhattacharya</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "black"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}>Head of photography</h4><Image src="../images/ip/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Keerthivasan</p><br></br></div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>
                </ImageBackground>

      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  }}
/>
<div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b><br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
      <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
            </View>
        )


      }

    }
    render() {   
        return (
          <View>
            {this.setbgimg()}
          </View>
        );   
    }
}
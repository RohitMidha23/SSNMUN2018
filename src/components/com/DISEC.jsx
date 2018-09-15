import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import WhenInView from '../WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';
import './DISEC.css';

export default class disec extends Component {
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
            <View style={{marginTop: "3em"}}>
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-12 col-xs-12" style={{textAlign: "center"}}><h3 id="heading" style={{color: "black", textAlign:"center"}}><b>Disarmament and International Security Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/DISECbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20https://drive.google.com/open?id=1ZnSsjKHrgPePiqyq6JflPyKoadzMaZHxpx"}} id="agenda">
                    "Tackling the growing threat of nuclear terrorism"
                    <h4>
                    <a href="https://drive.google.com/open?id=1ZnSsjKHrgPePiqyq6JflPyKoadzMaZHx" style={{color:"black"}}>Background Guide</a></h4>
                </p>
                

                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/DISECbgmFlip.png')"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                "War is a racket. It always has been... A few profit - and the many pay. But there is a way to stop it."<br></br>
-Smedley Butler</p><br></br><br></br>
<p style={{color:"white"}} id="letter">
Presenting to you the first committee of SSN MUN 2018 - The UNGA DISEC.<br></br><br></br>

The first committee of the General Assembly, the UNGA DISEC is concerned with disarmament, global threats to peace and other related international security questions. It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations.<br></br>
All 193 member states of the UN have equal voting rights in the DISEC.<br></br><br></br>

The UNGA DISEC is one of the six committees being simulated at SSN MUN this year.<br></br>
                </p>
                <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black",backgroundColor: "#770623"}} id="heading"><h4 style={{color: "white", textAlign:"center"}}><b>Director</b></h4><Image src="../images/disec/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Lohith Chiluka</p> <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black",backgroundColor: "#770623"}} id="heading"><h4 style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/disec/2.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Krishnakumar R</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#770623"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/disec/3.JPG" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Jaivignesh Jayakumar</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

                <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="../images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
            </View>
        )
      }
      else{
        return (
            <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/DISECbgm.png'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-12 col-xs-12" style={{textAlign:"center"}}><h3 id="heading" style={{color: "white", textAlign:"center"}}><b>Disarmament and International Security Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/DISECbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "Tackling the growing threat of nuclear terrorism"
                    <h4>
                    <a href="https://drive.google.com/open?id=1ZnSsjKHrgPePiqyq6JflPyKoadzMaZHx" style={{color:"black"}}>Background Guide</a></h4>
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/DISECbgmFlip.png')"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                "War is a racket. It always has been... A few profit - and the many pay. But there is a way to stop it."<br></br>
-Smedley Butler</p><br></br>
<p style={{color:"white"}} id="letter">

Presenting to you the first committee of SSN MUN 2018 - The UNGA DISEC.<br></br><br></br>

The first committee of the General Assembly, the UNGA DISEC is concerned with disarmament, global threats to peace and other related international security questions. It considers all disarmament and international security matters within the scope of the Charter or relating to the powers and functions of any other organ of the United Nations.<br></br>
All 193 member states of the UN have equal voting rights in the DISEC.<br></br><br></br>

The UNGA DISEC is one of the six committees being simulated at SSN MUN this year.<br></br>
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1" ><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#770623"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Director</b></h4><Image src="../images/disec/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Lohith Chiluka</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#770623"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/disec/2.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Krishnakumar R</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#770623"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/disec/3.JPG" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Jaivignesh Jayakumar</p><br></br></div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                </Grid>                
                <div><br></br><br></br></div>

                </ImageBackground>

                <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
        <br></br>
        <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="../images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
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
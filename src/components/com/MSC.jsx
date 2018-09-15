import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import WhenInView from '../WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';
import './DISEC.css';

export default class msc extends Component {


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
            return (
                <View style={{marginTop: "4em"}}>

            <ScrollUpButton />
            <div><br></br></div>
            <Grid>
            <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h3 style={{color: "black", textAlign:"center"}} id="heading"><b>Munich Security Conference</b></h3></div>
            <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
            <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/MSC2flipped.png')"}}>
            <h3 style={{color:"black",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
            <p style={{color: "black", textAlign: "center", fontSize:"20px"}} id="agenda">
                "The Bear and the Compass Rose : <br></br> Assessing the future of NATO-Russia relations and it's impact on Global Security Strategy."
                <h4>
                    <a href="https://drive.google.com/file/d/1LYRzmrauwkgjGJAc7TNUC0toSj0OfbGp/view?usp=sharing" style={{color:"white"}}>Background Guide</a></h4>
            </p>
            <br></br></div>
            <div className="col-xs-1 col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/MSC2flipped.png')"}}>
            <p style={{color: "black"}} id="letter"><br></br>
            It brings me immense pride to introduce to you all the flagship committee of SSNMUN 2018: The Munich Security Conference.<br></br><br></br>

The Munich Security Conference is an annual conference on international security policy that has taken place in Munich, Bavaria since 1963. It is the world's largest gathering of its kind.<br></br><br></br>

Over the past four decades the Munich Security Conference has become the most important independent forum for the exchange of views by international security policy decision-makers. Each year it brings together about 350 senior figures from more than 70 countries around the world to engage in an intensive debate on current and future security challenges.<br></br><br></br>

The list of attendees includes Heads of States, Governments and International Organizations, Ministers, Members of Parliament, high-ranking representatives of Armed Forces, Science, Civil society as well as Business and Media.<br></br><br></br>

If you're someone who enjoys power, character simulation and deliberation slightly different from conventional committees, you know where to be this September!<br></br><br></br>

A Munich Security Report has said: 'The World is on the brink'.<br></br>
It's up to you to decide if that's true!<br></br>
            </p>
            <br></br></div></RevealP>
                    }
                </WhenInView>

            <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-3 col-xs-12" style={{border: "thick solid black",backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/msc/1.png" style={{position: "relative", width: "100%", height: "100%"}}/>
            <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Shashank R</p> <br></br></div>
            </RevealP>
                    }
                </WhenInView>
            <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/msc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
            <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Aravind N</p><br></br></div>
            </RevealP>
                    }
                </WhenInView>
            <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-3 col-xs-12" style={{border: "thick solid black",backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/msc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
            <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Ansull Lakhotia</p><br></br></div>
            <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
            </RevealP>
                    }
                </WhenInView>
            

            </Grid>                
            <div><br></br><br></br></div>

            <View
style={{
borderBottomColor: 'grey',
borderBottomWidth: 4,
}}
/>
<div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}>Made with:
    <br></br>
    <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
          <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
    <Image src="../images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
    <br></br>
</div>

                </View>
          );
        }
        else{
              return (
                    <View style={{marginTop: "3em"}}>

                        <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/MSC2.png'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "-1em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "black", textAlign:"center"}} id="heading"><b>Munich Security Conference</b></h2></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/MSC2flipped.png')"}}>
                <h3 style={{color:"black",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "black", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "The Bear and the Compass Rose : <br></br> Assessing the future of NATO-Russia relations and it's impact on Global Security Strategy."
                    <h4>
                    <a href="https://drive.google.com/file/d/1LYRzmrauwkgjGJAc7TNUC0toSj0OfbGp/view?usp=sharing" style={{color:"white"}}>Background Guide</a></h4>
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/MSC2flipped.png')"}}>
                <p style={{color: "black"}} id="letter"><br></br>
                It brings me immense pride to introduce to you all the flagship committee of SSNMUN 2018: The Munich Security Conference.<br></br><br></br>

The Munich Security Conference is an annual conference on international security policy that has taken place in Munich, Bavaria since 1963. It is the world's largest gathering of its kind.<br></br><br></br>

Over the past four decades the Munich Security Conference has become the most important independent forum for the exchange of views by international security policy decision-makers. Each year it brings together about 350 senior figures from more than 70 countries around the world to engage in an intensive debate on current and future security challenges.<br></br><br></br>

The list of attendees includes Heads of States, Governments and International Organizations, Ministers, Members of Parliament, high-ranking representatives of Armed Forces, Science, Civil society as well as Business and Media.<br></br><br></br>

If you're someone who enjoys power, character simulation and deliberation slightly different from conventional committees, you know where to be this September!<br></br><br></br>

A Munich Security Report has said: 'The World is on the brink'.<br></br>
It's up to you to decide if that's true!<br></br>
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black",backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/msc/1.png" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Shashank R</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/msc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Aravind N</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#C64E3D"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/msc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Ansull Lakhotia</p><br></br></div>
                

                </Grid>                

                </ImageBackground>

                <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 4,
  }}
/>
<div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px" }}>Made with:
        <br></br>
        <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="../images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>

                    </View>
              );
        }
    }

    render(){
        return (
            <View>
                {this.setbgimg()}
            </View>
        )
    }
}
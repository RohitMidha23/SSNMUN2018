import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import WhenInView from '../WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';
import './DISEC.css';

export default class ess extends Component {

    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
    }

    setbgimg(){
        var screenWidth = window.innerWidth;
        if( screenWidth < 768 ){
            /*

                ------------------------MOBILE VERSION-----------------

            */
            // NOT LOADING IMAGE BACKGROUND
            return (
                <View style={{marginTop:"3em"}}>
                <ScrollUpButton />
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "black", textAlign:"center"}} id="heading"><b><br></br>Emergency Special Session</b></h2></div>
                
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{background: "url('../images/com/ESSflipped.png')", border: "thick solid black"}}>
                <h3 style={{color:"black",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "black", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "The Suez Crisis"
                    <h4>
                    <a href="https://drive.google.com/open?id=1YkePteRm362cjDXOZXZHm_s0CEuqhk6w" style={{color:"white"}} >Background Guide</a></h4>
                </p>
                <br></br></div>
                <div className="col-xs-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12 col-xs-12" style={{background: "url('../images/com/ESSflipped.png')", border: "thick solid black"}}>
                <p style={{color: "black"}} id="agenda"><br></br>
                "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known."<br></br>
-George Marshall.</p><br></br><br></br>
<p style={{color: "black"}} id="letter">
Next up the 5th conference to be simulated at SSN MUN 2018, The Emergency Special Session or the ESS.<br></br>
An Emergency Special Session is an unscheduled meeting of the United Nations General Assembly to make urgent recommendations on a particular issue. They are typically rare—a fact reflected in there being only 10 in the history of the United Nations.<br></br><br></br>

The ESS convenes if the Security Council, because of lack of unanimity of the permanent members, fails to exercise its primary responsibility for the maintenance of international peace and security in any case where there appears to be a threat to the peace, breach of the peace, or act of aggression which prompts the General Assembly to consider the matter immediately with a view to making appropriate recommendations to Members for collective measures, including in the case of a breach of the peace or act of aggression the use of armed force when necessary, to maintain or restore international peace and security.<br></br>
                </p>
                <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/ess/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Tejas Bagri</p> <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/ess/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Vaibhav K N</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid blue", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/ess/3.jpeg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Dayanidhi Krishna</p><br></br></div>
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
<div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>      <br></br>
      <Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
      <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
      <Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
      </div>
      </View>
            );
        }




        /*

                ------------------------DESKTOP VERSION-----------------

        */


    else{
            // LOADING IMAGE BACKGROUND
            return (
                <View>
                <ImageBackground id="idkwhy2"
        resizeMode = "repeat"
        source={{uri: '../images/com/ESS.jpg'}}
        style={{width: '100%', height: '100%', opacity: 0.9, marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12"><h2 style={{color: "white", textAlign:"center"}} id="heading"><b>Emergency Special Session</b></h2></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/ESSflipped.png')"}}>
                <h3 style={{color:"black",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "black", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "The Suez Crisis"
                    <h4>
                    <a href="https://drive.google.com/open?id=1YkePteRm362cjDXOZXZHm_s0CEuqhk6w" style={{color:"white"}} >Background Guide</a></h4>                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12 col-xs-12" style={{background: "url('../images/com/ESSflipped.png')", border: "thick solid black"}}>
                <p style={{color: "black"}} id="agenda"><br></br>
                "If man does find the solution for world peace it will be the most revolutionary reversal of his record we have ever known."<br></br>
-George Marshall.</p><br></br><br></br>
<p style={{color: "black"}} id="letter">
Next up the 5th conference to be simulated at SSN MUN 2018, The Emergency Special Session or the ESS.<br></br>
An Emergency Special Session is an unscheduled meeting of the United Nations General Assembly to make urgent recommendations on a particular issue. They are typically rare—a fact reflected in there being only 10 in the history of the United Nations.<br></br><br></br>

The ESS convenes if the Security Council, because of lack of unanimity of the permanent members, fails to exercise its primary responsibility for the maintenance of international peace and security in any case where there appears to be a threat to the peace, breach of the peace, or act of aggression which prompts the General Assembly to consider the matter immediately with a view to making appropriate recommendations to Members for collective measures, including in the case of a breach of the peace or act of aggression the use of armed force when necessary, to maintain or restore international peace and security.<br></br>
                </p>
                <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Director</b></h4><Image src="../images/ess/1.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Tejas Bagri</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/ess/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Vaibhav K N</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#26969c"}}><h4 id="heading" style={{color: "black", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/ess/3.jpeg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"black", textAlign: "center"}} id="letter"><br></br>Dayanidhi Krishna</p><br></br></div>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>

                </ImageBackground>

<View
style={{
borderBottomColor: 'grey',
borderBottomWidth: 4,
}}
/>
<div style={{backgroundColor: "grey", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>      <br></br>
<Image src="../images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
<b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
<Image src="../images/heartimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>
</div>
      </View>
            );
        }
    }

    render(){
        return (
            <View>{this.setbgimg()}</View>
        )
    }
}
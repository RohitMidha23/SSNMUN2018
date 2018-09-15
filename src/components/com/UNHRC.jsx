import React, { Component } from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import WhenInView from '../WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';
import './DISEC.css';

export default class unhrc extends Component {
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
            <View style={{marginTop:"3em"}}>
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-12 col-xs-12"><h3 style={{color: "black", textAlign:"center"}} id="heading"><b>United Nations<br></br> Human Rights Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/HRCbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "UNHRC Special Session :<br></br> Human Rights situation in occupied Palestinian territory, including east Jerusalem and the Syrian Golan."
                    <h4>
                    <a href="https://drive.google.com/open?id=1up8XxB_wYyd2bdp-xZDK6B9XnI9AOaFD" style={{color:"black"}}>Background Guide</a></h4>
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/HRCbgmFlip.png')"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                
                “A right delayed is a right denied.”<br></br>-Martin Luther King Jr</p><br></br><br></br>
                <p style={{color: "white"}} id="letter">
Ladies and Gentlemen, introducing the third council to be simulated at SSN MUN 2018: The United Nations Human Rights Council.<br></br><br></br>

The Human Rights Council is an inter-governmental body within the United Nations tasked with the responsibility of strengthening the promotion and protection of human rights around the globe whilst also addressing situations of human rights violations and make appropriate recommendations to address and rectify them. The Human Rights Council also works in tandem with the UN Special Procedures established by the former Commission on Human Rights and now assumed by the Council. These are made up of special rapporteurs, special representatives, independent experts and working groups that monitor, examine, advise and publicly report on thematic issues or human rights situations in specific.<br></br><br></br>

The UNHRC is one of the six councils being simulated at SSN MUN this year.<br></br>
                
                </p>
                <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Director</b></h4><Image src="../images/unhrc/1.PNG" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Ishita M</p> <br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/unhrc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Adiya Kumar</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-1"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/unhrc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Eassa Salim</p><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                

                </Grid>                
                <div><br></br><br></br></div>
                <View
style={{
borderBottomColor: 'grey',
borderBottomWidth: 4,
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
        source={{uri: '../images/com/HRCbgm.png'}}
        style={{width: '100%', height: '100%', marginTop: "3em"}} >
                <ScrollUpButton />
                <div><br></br></div>
                <Grid>
                <div className="col-lg-12 col-xs-12" style={{}}><h3 style={{color: "white", textAlign:"center"}} id="heading"><b>United Nations Human Rights Council</b></h3></div>
                <div className="col-lg-12 col-xs-12"><br></br><br></br></div>
                <div className="col-lg-6 col-lg-offset-3 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/HRCbgmFlip.png')"}}>
                <h3 style={{color:"white",textAlign:"center"}} id="heading"><b>AGENDA:</b></h3>
                <p style={{color: "white", textAlign: "center", fontSize:"20px"}} id="agenda">
                    "UNHRC Special Session :<br></br> Human Rights situation in occupied Palestinian territory, including east Jerusalem and the Syrian Golan."
                    <h4>
                    <a href="https://drive.google.com/open?id=1up8XxB_wYyd2bdp-xZDK6B9XnI9AOaFD" style={{color:"black"}}>Background Guide</a></h4>
                </p>
                <br></br></div>
                <div className="col-xs-1 col-lg-12"><br></br><br></br></div>

                <div className="col-lg-12 col-xs-12" style={{border: "thick solid black", background: "url('../images/com/HRCbgmFlip.png')"}}>
                <p style={{color: "white"}} id="agenda"><br></br>
                
                “A right delayed is a right denied.”<br></br>-Martin Luther King Jr</p><br></br>
<p style={{color: "white"}} id="letter">
Ladies and Gentlemen, introducing the third council to be simulated at SSN MUN 2018: The United Nations Human Rights Council.<br></br><br></br>

The Human Rights Council is an inter-governmental body within the United Nations tasked with the responsibility of strengthening the promotion and protection of human rights around the globe whilst also addressing situations of human rights violations and make appropriate recommendations to address and rectify them. The Human Rights Council also works in tandem with the UN Special Procedures established by the former Commission on Human Rights and now assumed by the Council. These are made up of special rapporteurs, special representatives, independent experts and working groups that monitor, examine, advise and publicly report on thematic issues or human rights situations in specific.<br></br><br></br>

The UNHRC is one of the six councils being simulated at SSN MUN this year.<br></br>
                
                </p>
                <br></br></div>

                <div className="col-lg-12 col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Director</b></h4><Image src="../images/unhrc/1.PNG" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Ishita M</p> <br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>
                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Chair-person</b></h4><Image src="../images/unhrc/2.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Adiya Kumar</p><br></br></div>
                <div className="col-xs-1"><br></br><br></br></div>

                <div className="col-lg-3 col-xs-12" style={{border: "thick solid black", backgroundColor: "#631D59"}}><h4 id="heading" style={{color: "white", textAlign:"center"}}><b>Vice Chair-person</b></h4><Image src="../images/unhrc/3.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                <p style={{color:"white", textAlign: "center"}} id="letter"><br></br>Eassa Salim</p><br></br></div>
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
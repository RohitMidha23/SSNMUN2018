import React, { Component } from 'react';
import { Image , Grid} from 'react-bootstrap';
import {View, ImageBackground, Text, WebView} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Home.css';
import ScrollUpButton from 'react-scroll-up-button';

export default class Home extends Component {
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
        // Load mobile image

        return (

          <View>
              <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "3.5em"} } />
          <View
    style={{
      borderBottomColor: 'grey',
      borderBottomWidth: 3,
    }}
  />
        <ScrollUpButton/>
                  <div><br></br><br></br></div>      
                  <Grid id="whole">
                  <div className="col-lg-12" style={{border: "medium solid black", background: "url('images/hd2flippedmob.jpg')"}}><h3 id = "heading" style={{color: "black", textAlign: "center", fontSize: "22px"}}><b>Letter from the<br></br> Secretary General</b></h3><p style={{color: "black"}}>
                  <br></br>
                  <Image src="./images/anandhomepage.jpg" style={{position: "relative", width: "100%", height: "100%"}}/>
                  <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>    
                  <br></br>
                  <br></br>
                  <p id="letter">
                  Ladies and Gentlemen,
  <br></br><br></br>
  On behalf of the entire Organizing Committee, it gives me great pleasure to welcome you to SSN Model United Nations, 2018.<br></br><br></br>
  Ever since its inception in 2014, SSNMUN has been renown for the standards that it has established in the MUN circuit in terms of the quality of the participation of delegates and the Executive Board members who have been a part of our conference. This conference has always sought to build upon and surpass  the foundations and standards that we have established with each subsequent edition and we’re confident this edition will be no different. <br></br><br></br>
  This year, with a total of 6 committees, we look forward to hosting a conference of exceptional quality, and ensure that all attendees take away something of value, enriching all stakeholders in the process as well as making it a conference to remember.<br></br><br></br>
  Henceforth, I cordially invite you to SSN MUN 2018, to experience three days of engaging debate and deliberation.<br></br><br></br>
  Yours Sincerely<br></br>
  Anand Subramanian<br></br>
  Secretary General<br></br>
  SSN MUN 2018<br></br></p>
  </RevealP>
                    }
                </WhenInView>
   </p></div>
   <div className="col-lg-12"><br></br><br></br></div>
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
        <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
        <Image src="images/heartimg.png" style={{position: "relative", width: "45px", height: "45px"}}/>
        <br></br>
  </div>
  </View>
      );


      } 
      else {
        // desktop image
          return (

            <View>
    
               <ImageBackground id="idkwhy2"
              resizeMode= "repeat"
              source = {{uri: 'images/hd2flip.jpg'}}
            position="relative"
            style={{width: '100%',marginTop:"-0.3em", position:'relative'}} >
                              <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "3.5em"} } />
            <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
      }}
    />
          <ScrollUpButton/>
                    <div><br></br><br></br></div>      
                    <Grid id="whole">
                    <div className="col-lg-12" style={{border: "medium solid black", background: "url('images/hd2flipped.jpg')"}}><h1 id="heading" style={{color: "black", textAlign: "center"}}><b>Letter from the Secretary General</b></h1><p style={{color: "black"}}>
                    <div className="col-lg-6 col-lg-offset-3">
                    <Image src="./images/anandhomepage.jpg" style={{position: "relative", width: "100%", border: "medium solid black", height: "100%"}}/>
                    </div>
                    <div className="col-lg-12">
                    <br></br><br></br>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                        <p id="letter">                                      
                    Ladies and Gentlemen,<br></br><br></br>
    On behalf of the entire Organizing Committee, it gives me great pleasure to welcome you to SSN Model United Nations, 2018.<br></br><br></br>
    Ever since its inception in 2014, SSNMUN has been renown for the standards that it has established in the MUN circuit in terms of the quality of the participation of delegates and the Executive Board members who have been a part of our conference. This conference has always sought to build upon and surpass  the foundations and standards that we have established with each subsequent edition and we’re confident this edition will be no different. <br></br><br></br>
    This year, with a total of 6 committees, we look forward to hosting a conference of exceptional quality, and ensure that all attendees take away something of value, enriching all stakeholders in the process as well as making it a conference to remember.<br></br><br></br>
    Henceforth, I cordially invite you to SSN MUN 2018, to experience three days of engaging debate and deliberation.
    <br></br><br></br>
    Yours Sincerely<br></br>
    Anand Subramanian<br></br>
    Secretary General<br></br>
    SSN MUN 2018<br></br><br></br>
    </p>
    </RevealP>
                    }
                </WhenInView>
                    </div>   
                    
     </p></div>
     <div className="col-lg-12"><br></br><br></br></div>
        <div className="col-lg-6 col-lg-offset-3">

            


        </div>
                </Grid>
                <div><br></br><br></br></div>
                
    
    </ImageBackground>
    
                
          <View
      style={{
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
      }}
    />
          <div style={{backgroundColor: "#bfbab9", color:"black", textAlign: "center", fontSize: "15px" }}><b>Made with:</b>
          <br></br>
          <Image src="./images/reactimg.png" style={{position: "relative", width: "60px", height: "60px"}}/>
              <b>and</b> {/*<Image src="images/addimg.png" style={{position: "relative", width: "50px", height: "50px"}}/>*/}
          <Image src="images/heartimg.png" style={{position: "relative", width: "40px", height: "40px"}}/>
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
      );
        
  }
}

           
import React, { Component } from 'react';
import {Text, View, ImageBackground, nking} from 'react-native';
import { Image,Grid } from 'react-bootstrap';
import './Committees.css';
import ScrollUpButton from 'react-scroll-up-button';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';

export default class committees extends Component {

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

            return(
                <View>
                          <Image id="mainlogo" src="images/logo.jpg" id="mainlogo" className="header-image" style={ {position: "relative", height: "100%", width: "100%", marginTop: "3.5em"} } />
        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  }}
/>
  <ScrollUpButton/>
        <ScrollUpButton />
                  <div><br></br><br></br></div>
            <Grid id="whole">
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                          <div className="col-lg-4"><a href="/com/IP"><Image style={{position: "relative", cursor: "pointer"}} src="images/IP.jpg" className="secpic"/></a><br></br><br></br></div>
                        </RevealP>
                    }
                  </WhenInView>
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-4"><a href="/com/UNSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNSC.jpg" className="secpic"/></a><br></br><br></br></div>
            </RevealP>
                    }
                  </WhenInView>
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-4"><a href="/com/DISEC"><Image style={{position: "relative", cursor: "pointer"}} src="images/DISEC.jpg" className="secpic"/></a><br></br><br></br></div>
            </RevealP>
                    }
                  </WhenInView>
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-4"><a href="/com/UNHRC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNHRC.jpg" className="secpic"/></a><br></br><br></br></div>
            </RevealP>
                    }
                  </WhenInView>
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-4"><a href="/com/MSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/MSC.jpg" className="secpic"/></a><br></br><br></br></div>
            </RevealP>
                    }
                  </WhenInView>
            <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
            <div className="col-lg-4"><a href="/com/ESS"><Image style={{position: "relative", cursor: "pointer"}} src="images/ESS.jpg" className="secpic"/></a><br></br><br></br></div>
            </RevealP>
                    }
                  </WhenInView>
            <div><br></br><br></br></div>
        </Grid>
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
          else{

            /*
    
    
                DESKTOP VERSION
            
            
            */
            //load DESKTOP IMAGE

                return(
                    <View>
    
               <ImageBackground id="idkwhy2"
              resizeMode= "repeat"
              source = {{uri: 'images/hd2flipped.jpg'}}
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
            <ScrollUpButton />
                      <div><br></br><br></br><br></br><br></br></div>
                <Grid id="whole">
                <div className="col-lg-4"><a href="/com/IP"><Image style={{position: "relative", cursor: "pointer"}} src="images/IP.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/UNSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNSC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/DISEC"><Image style={{position: "relative", cursor: "pointer"}} src="images/DISEC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/UNHRC"><Image style={{position: "relative", cursor: "pointer"}} src="images/UNHRC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/MSC"><Image style={{position: "relative", cursor: "pointer"}} src="images/MSC.jpg" className="secpic"/></a><br></br><br></br></div>
                <div className="col-lg-4"><a href="/com/ESS"><Image style={{position: "relative", cursor: "pointer"}} src="images/ESS.jpg" className="secpic"/></a><br></br><br></br></div>
                <div><br></br><br></br><br></br><br></br></div>
            </Grid>
            <div><br></br><br></br><br></br><br></br></div>
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

    render(){
        return (
            <View>
                {this.setbgimg()}
            </View>
        )
    }
}
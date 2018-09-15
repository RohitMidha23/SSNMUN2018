import React, {Component} from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text, ImageBackground} from 'react-native';
import './Applications.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';


export default class Allotments extends Component{
  constructor(props) {
    super(props);
    this.state = { 
     checking:false
  };
    this.setbgimg = this.setbgimg.bind(this);
}

      setbgimg(){
        var screenheight = window.innerHeight;
        screenheight = (screenheight) + "px";
        var screenwidth = window.innerWidth;
        if(screenwidth<768){
          return(
            <View style={{ }}>
                
            <Grid>            
              <iframe src="https://drive.google.com/embeddedfolderview?id=1FZDUU2STl0-3qykPSeWaUQRCky-ZAOYu#grid" width="100%" height="100%" style={{marginTop: "3.5em", color: "black",border: "medium solid black", marginTop: "5em", height: "500px", background:"url('images/hd2flippedmob.jpg')"}} frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
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
</div>
      </View>
        );
        }
        else{
          return(
            <View style={{background:"url('images/hd2flipped.jpg')"}}>
              
            <Grid style={{ height: screenheight, color: "black",}}>
              <div style={{border: "medium solid black", marginTop: "10em", height: "500px", backgroundColor: "#CAC8C5"}}>
              <iframe src="https://drive.google.com/embeddedfolderview?id=1FZDUU2STl0-3qykPSeWaUQRCky-ZAOYu#grid" width="100%" height="100%" style={{marginTop: "3.5em"}} frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div>
              </Grid>          
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
          );


      }

}
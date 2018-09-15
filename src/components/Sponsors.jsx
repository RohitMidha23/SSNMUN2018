import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';
import './Sponsors.css';
import ReactDOM from 'react-dom';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';

export default class Sponsors extends Component {
  
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
        var newheight = window.innerHeight-window.innerWidth;
        newheight = newheight - 120;
        newheight = (newheight) + "px";
        var heightofimage=0;
        var margint=0;
        if(screenwidth<768){
            return(
              <View style={{marginTop:"3.75em", height:"100%", backgroundColor:"#c0c1c4"}}>
        <ScrollUpButton />

        {/* <Image src="images/logo.jpg" className="header-image" /> */}
        
            {/* <div style={{textAlign:"center"}}> */}
            <div>
              <Image src="./images/sponsors.jpg" id="sponsorimg"  style={{position:"relative",width:"100%", border:"medium solid black"}}/>
            </div>

            <View style={{height:newheight, backgroundColor:"#c0c1c4"}} />

        {/* <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
                <div id="content"><p id="head"><h2>Sponsors:</h2>
            Please wait for the Applications to be released!<br></br>
            </p>
            </div> */}
        <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
  }}
/>
      <div style={{backgroundColor: "#cccccc", color:"black", textAlign: "center", fontSize: "15px"}}><b>Made with:</b>
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
        <ScrollUpButton />

        {/* <Image src="images/logo.jpg" className="header-image" /> */}
        
        <Grid style={{marginTop: "3em"}}>
            <div className="col-lg-12" style={{textAlign:"center"}}>
            
            <Image src="./images/sponsors.jpg" style={{position:"relative",height:screenheight , border:"medium solid black", marginTop:"2em", marginBottom:"2em"}}/>
            
            </div>
        </Grid>

        {/* <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
                <div id="content"><p id="head"><h2>Sponsors:</h2>
            Please wait for the Applications to be released!<br></br>
            </p>
            </div> */}
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
    render() {
      return (
        <View>
          {this.setbgimg()}
      </View>
      )
    }
}
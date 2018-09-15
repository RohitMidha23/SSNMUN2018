import React, { Component } from 'react' 
import { Image ,Grid} from 'react-bootstrap';
import {View, ImageBackground} from 'react-native';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import './Sec.css';
import ScrollUpButton from 'react-scroll-up-button';

class Sec extends Component {

    constructor(props) {
        super(props);
        this.state = { 
         checking:false
      };
        this.setbgimg = this.setbgimg.bind(this);
        this.showmeme = this.showmeme.bind(this);

        this.showmeme2 = this.showmeme2.bind(this);

    }
        
    showmeme(){
        const url = "./images/oc/thisis.jpg";
        window.open(url);
    }

    showmeme2(){
        const url = "./images/oc/meme2.jpg";
        window.open(url);
    }


      setbgimg(){
        
        var screenWidth = window.innerWidth;
          if( screenWidth < 768 ){

            return(
                <View>
            
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-12" style={{color: "black", textAlign: "center", fontSize: "20px", marginTop:"30%"}}><b>Meet The Team!</b><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-6">
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                        <div className="col-lg-12">
                        <div><Image src="images/gana.jpg" className="secpic"/></div><br></br></div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>DELEGATE AFFAIRS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/navneeth.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/meena.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/2.JPG" className="secpic2"/><br></br><br></br>Vigneshwar Veeravagu<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/1.jpg" className="secpic2"/><br></br><br></br>Rohit Midha<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/4.jpeg" className="secpic2"/><br></br><br></br>Vinaya Krishna<br></br><br></br>

                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/3.png" className="secpic2"/><br></br><br></br>Priyanka Srivastava<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                <div className="col-xs-6 col-xs-offset-3" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>FINANCE</b></h3></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6 col-lg-offset-3"> <Image src="images/tejas.jpg" className="secpic"/><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6 col-xs-offset-3" style={{textAlign:"center"}}>
                <Image src="images/oc/finance/1.jpg" className="secpic2"/><br></br><br></br>Sadhana Smruthi<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>LOGISTICS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/bharath.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/harish.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/1.png" className="secpic2"/><br></br><br></br>Amirthavarshini<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/2.jpg" className="secpic2"/><br></br><br></br>K. Akash Kannan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6 col-xs-offset-3" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/3.jpeg" className="secpic2"/><br></br><br></br>Jakkula Divya Tej<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>HOSPITALITY</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shenoy.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/sushi.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/1.jpg" className="secpic2"/><br></br><br></br>Sowmya C<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/2.jpg" className="secpic2"/><br></br><br></br>Nikhilesh N<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/3.jpg" className="secpic2"/><br></br><br></br>Gurkaran Singh Thukral<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/4.jpg" className="secpic5"/><br></br><br></br>Shwetha Madhavan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/5.jpeg" className="secpic2"/><br></br><br></br>Akshara Kannan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/6.jpg" className="secpic2"/><br></br><br></br>Stephen Niranjan Bennett<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                
                <div className="col-xs-12 col-sm-12 col-md-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>SPONSORSHIP</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/RP.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/srini.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/1.JPG" className="secpic2"/><br></br><br></br>Suraj Jacob Chandy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-1"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/2.jpg" className="secpic2"/><br></br><br></br>R Sai Jayaraman<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/3.jpg" className="secpic2"/><br></br><br></br>Raghul S<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/4.JPG" className="secpic2"/><br></br><br></br>Akshay Ramakrishnan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/5.jpg" className="secpic2"/><br></br><br></br>Hayagreev S<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/anam.jpeg" className="secpicanamxs"/><br></br><br></br>Anam Saatvik Reddy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-12 col-sm-12 col-md-12"><br></br><br></br></div>
                               <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>TECH AND DESIGN</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/vishal.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shreyas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/me.jpg" className="secpicmexs" onClick={() => this.showmeme()}/><br></br><br></br>Srinath V<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/1.jpg" className="secpic2" onClick={() => this.showmeme2()}/><br></br><br></br>Rohit Midha<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/anam.jpeg" className="secpicanamxs"/><br></br><br></br>Anam Saatvik Reddy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-xs-6" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/divya.jpg" className="secpicanamxs"/><br></br><br></br>Divya Sanchana A<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-xs-3">
                <br></br><br></br></div>
                <div className="col-lg-3">
                <br></br><br></br></div>
                <div className="col-lg-6">
                             <div></div>
                <br></br><br></br>
                </div>
                <ScrollUpButton />
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
        source={{uri: 'images/hd2flipped.jpg'}}
        style={{width: '100%', height: '100%',  marginTop: "-1em"}} >
            <Grid id="whole">
                <br></br><br></br>
                <div className="col-lg-12" style={{color: "black", textAlign: "center", fontSize: "20px", marginTop:"30%"}}><b>Meet The Team!</b><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
                <div className="col-lg-6">
                             <div><Image src="images/anand.jpg" className="secpic"/></div>
                <br></br><br></br>
                </div>
                <div className="col-lg-6">
                        <div className="col-lg-12">
                        <div><Image src="images/gana.jpg" className="secpic"/></div><br></br></div>
                </div>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>DELEGATE AFFAIRS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/navneeth.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/meena.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/2.JPG" className="secpic3"/><br></br><br></br>Vigneshwar Veeravagu<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/1.jpg" className="secpic3"/><br></br><br></br>Rohit Midha<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/4.jpeg" className="secpic3"/><br></br><br></br>Vinaya Krishna<br></br><br></br>

                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/3.png" className="secpic3"/><br></br><br></br>Priyanka Srivastava<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>FINANCE</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6 col-lg-offset-3"> <Image src="images/tejas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-4 col-lg-offset-4" style={{textAlign:"center"}}>
                <Image src="images/oc/finance/1.jpg" className="secpic3"/><br></br><br></br>Sadhana Smruthi<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>LOGISTICS</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/bharath.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/harish.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/1.png" className="secpic3"/><br></br><br></br>Amirthavarshini<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-1"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/2.jpg" className="secpic3"/><br></br><br></br>K. Akash Kannan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-1"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/logistics/3.jpeg" className="secpic3"/><br></br><br></br>Jakkula Divya Tej<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>HOSPITALITY</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shenoy.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/sushi.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/1.jpg" className="secpic3"/><br></br><br></br>Sowmya C<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/2.jpg" className="secpic3"/><br></br><br></br>Nikhilesh N<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/3.jpg" className="secpic3"/><br></br><br></br>Gurkaran Singh Thukral<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/4.jpg" className="secpic3"/><br></br><br></br>Shwetha Madhavan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-2" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/5.jpeg" className="secpic3"/><br></br><br></br>Akshara Kannan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-2" style={{textAlign:"center"}}>
                <Image src="images/oc/hospitality/6.jpg" className="secpic3"/><br></br><br></br>Stephen Niranjan Bennett<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>SPONSORSHIP</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/RP.jpg" className="secpic"/><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/srini.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>

                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/1.JPG" className="secpic3"/><br></br><br></br>Suraj Jacob Chandy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-1" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/2.jpg" className="secpic3"/><br></br><br></br>R Sai Jayaraman<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-1" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/3.jpg" className="secpic3"/><br></br><br></br>Raghul S<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/4.JPG" className="secpic3"/><br></br><br></br>Akshay Ramakrishnan<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-1" style={{textAlign:"center"}}>
                <Image src="images/oc/sponsor/5.jpg" className="secpic3"/><br></br><br></br>Hayagreev S<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3 col-lg-offset-1" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/anam.jpeg" className="secpicanamlg"/><br></br><br></br>Anam Saatvik Reddy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-12"><br></br><br></br></div>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-12" style={{textAlign:"center"}}><h3 style = {{color: "black"}}><b>TECH AND DESIGN</b></h3></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/vishal.jpg" className="secpic" /><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-6"> <Image src="images/shreyas.jpg" className="secpic"/><br></br><br></br><br></br><br></br></div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/me.jpg" className="secpicmelg" onClick={() => this.showmeme()} /><br></br><br></br>Srinath V<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/del affairs/1.jpg" className="secpic3" onClick={() => this.showmeme2()}/><br></br><br></br>Rohit Midha<br></br><br></br>
                </div>
                </RevealP>
                    }

                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/anam.jpeg" className="secpicanamlg"/><br></br><br></br>Anam Saatvik Reddy<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <WhenInView>
                    {({ isInView }) =>
                        <RevealP hide={!isInView}>
                <div className="col-lg-3" style={{textAlign:"center"}}>
                <Image src="images/oc/tech design/divya.jpg" className="secpicanamlg"/><br></br><br></br>Divya Sanchana A<br></br><br></br>
                </div>
                </RevealP>
                    }
                </WhenInView>
                <div className="col-lg-3">
                <br></br><br></br></div>
                <div className="col-lg-3">
                <br></br><br></br></div>
                <div className="col-lg-6">
                             <div></div>
                <br></br><br></br>
                </div>
                <ScrollUpButton />
            </Grid>
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

export default Sec;
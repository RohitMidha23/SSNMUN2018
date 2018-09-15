import React, { Component } from 'react' 
import { Image, Grid ,Row} from 'react-bootstrap';
import {ScrollView, View, Text} from 'react-native';
import './Ip.css';
import WhenInView from './WhenInView/WhenInView';
import RevealP from 'react-reveal';
import ScrollUpButton from 'react-scroll-up-button';


export default class Ip extends Component {
    render() {
      return (
        <View id="contai">
        <ScrollUpButton />
        <Image src="images/logo.jpg" className="header-image" />
        <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </div>
        
          <WhenInView>
            { ( isInView ) => 
            
            <RevealP hide={!isInView}>
            <Image src="images/IP.jpg" className="IP-image" />
            <div id="content"><p id="head"><h2>The International Press:</h2>
            An institution entrusted with the documentation of the happenings of a United Nations’ conference, is responsible for keeping its readers apprised on the matters being discussed in various committees. The institution involves itself with the release of jargon-free, comprehensible information and works to reinforce the ideologies of diplomacy and democracy. Keeping the ethics of journalism in mind and upholding the principle of transparency at all times, the International Press can be rightly regarded as the watchdog for qualitative deliberation.    <br></br>
            </p>
            </div>
            </RevealP>

            }
        </WhenInView>
        
      </View>
      )
    }
}
import React, { Component } from 'react'
import {View ,Text, StyleSheet, TouchableOpacity,TextInput,Image,Platform ,KeyboardAvoidingView  ,} from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button,Icon, Left, Right, Body,StyleProvider ,  } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Share from 'react-native-share';
import ToggleSwitch from 'toggle-switch-react-native'
// import { shareAlt } from '@fortawesome/free-solid-svg-icons'
import Room from './Room'
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class Home extends Component {
    state={
        pickName:'',
        isEnabled:false,
        Name:'',
        border:true
    }
 url = 'https://awesome.contents.com/';
 title = 'Awesome Contents';
 message = 'Please check this out.';
 icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
 options = Platform.select({
  android: {
    activityItemSources: [
      { // For sharing url with custom title.
        placeholderItem: { type: 'url', content: 'https://awesome.contents.com/' },
        item: {
          default: { type: 'url', content:'https://awesome.contents.com/'},
        },
        subject: {
          default: 'Awesome Contents',
        },
        linkMetadata: { originalUrl: 'https://awesome.contents.com/'  },
      },
    ],
  },
  default: {
    // title,
    subject: this.title,
    message: `${this.message} ${this.url}`,
  },
});

conference = () => {
  console.log('param name')
  this.props.navigation.navigate('Main')
}
createMeeting = (id) =>{
  
  this.props.navigation.navigate('Meeting',{id,type:this.state.isEnabled,name:'new user'})
  this.setState({pickName:''})
  this.setState({border:true})
}
toggleSwitch = () => {
  this.setState({isEnabled:!this.state.isEnabled})
}
    render() {
      console.log(this.state)
        return (
          <StyleProvider style={getTheme(material)}>
          <Container>
            <Header style={{ backgroundColor: "#2ea1f8" }} androidStatusBarColor="#2ea1f8">
          <Left>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
            <Image
                style={{height:35,width:35}}
                source={require('../assets/menu.png')}
            />
            </TouchableOpacity>
          </Left>
                <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginLeft:'50%'}}>
                    <Text style={{color:'#fff',fontWeight:'bold',marginHorizontal:5,fontSize:16}}>Video</Text>
                    <ToggleSwitch
                      isOn={this.state.isEnabled}
                      onColor=" #2196c4"
                      offColor="#2196c4"
                      thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      labelStyle={{ color: "black", fontWeight: "900",}}
                      size="medium"
                      onToggle={(isOn) => this.setState({isEnabled:isOn})}
                    />
                    <Text style={{color:'#fff',fontWeight:'bold',marginHorizontal:5,fontSize:16}}>Voice</Text>
                </View>
          <Right />
        </Header>
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={[styles.head,{display:this.state.border ? 'flex' : 'none' ,}]}>
                     <Image
                        style={[styles.tinyLogo]}
                        source={require('../assets/logo.jpeg')}
                    />
                    <Text style={{fontSize:30,color:'#000066'}}>Create or join </Text> 
                    <Text style={{fontSize:30,color:'#000066'}}>a meating</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity 
                    style={[styles.botton,{backgroundColor:'#2ea1f8',position:'relative',flexDirection:'row'}]} 
                    onPress={()=>{Share.open(this.options);}}>

                        <Image
                            style={{height:24,width:20,alignSelf:'center',marginHorizontal:5}}
                            source={require('../assets/share.png')}
                        />
                        <Text style={{color:'#fff'}}> Invite Users </Text>
                    </TouchableOpacity>
                    <TextInput
                      label='Pick Name'
                      placeholder='Pick Name'
                      onFocus={ () => this.setState({border:false})}
                      onBlur={ () => this.setState({border:true}) }
                      onChangeText={value => this.setState({ pickName: value })}
                      style={[styles.textInput]}
                      value={this.state.pickName}
				            />  
                    <TouchableOpacity 
                    style={[styles.botton,{backgroundColor: this.state.pickName ? '#2ea1f8' : '#ccc',position:'relative'}]} 
                    onPress={()=>{
                      this.state.pickName.length >= 1 &&  this.createMeeting(this.state.pickName)
                    }} >
                        <Text style={{color:'#fff'}}> Create the meating </Text>
                    </TouchableOpacity>
                </View>
                {/* <Text style={{alignSelf:'center',fontSize:12}}>Join a meeting link is the text bellow : rejoindre une réunion </Text> */}
                <TouchableOpacity onPress={()=>{ this.conference() }}>
                  <Text style={styles.bottomButton}> rejoindre une réunion </Text>
                </TouchableOpacity>
            </View>
            <Footer style={{bottom:0,}}>
          <FooterTab  style={{ backgroundColor: "#2ea1f8" ,}}>
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                  {/* <TouchableOpacity>
                  <Image
                      style={{height:20,width:20,alignSelf:'center'}}
                      source={require('../assets/h5.png')}
                  />
                    <Text style={{color:'#fff'}}>Recent</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity>
                  <Image
                      style={{height:20,width:20,alignSelf:'center'}}
                      source={require('../assets/home.png')}
                  />
                    <Text style={{color:'#fff'}}>Home</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <Image
                      style={{height:20,width:20,alignSelf:'center'}}
                      source={require('../assets/c5.png')}
                  />
                  {/* <Icon name='beer' /> */}
                    <Text  style={{color:'#fff'}}>calender</Text>
                  </TouchableOpacity>
              </View>
          </FooterTab>
        </Footer>
          </Container> 
          </StyleProvider>   
        )
    }
}
const styles=StyleSheet.create({
    head:{
        flex:3,
        alignItems: 'center',
		    justifyContent: 'center',
    },
    bottom:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // width:'90%',
        backgroundColor:'#f5f5f0',
        marginHorizontal:'10%',
        borderRadius:10,
        marginBottom:20,
    },
    botton:{
        width:'90%',
        height:50,
        alignItems:'center',
        borderRadius:10,
        justifyContent:'center'
    },
    tinyLogo:{
        height:100,
        width:'100%',
    },
    bottomButton:{
      alignSelf:'center',
      justifyContent:'center',
      height:40,
      color:'#000066',
      fontSize:25,
    },
    textInput: {
      // color: '#fff',
      height:50,
      borderWidth:2,
      borderColor:'#ccc',
      width:'90%',
      borderRadius:10,
      marginTop:5,
      
     },
})
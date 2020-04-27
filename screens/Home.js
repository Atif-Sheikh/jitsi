import React, { Component } from 'react'
import {View ,Text, StyleSheet, TouchableOpacity,TextInput,Image,Platform ,} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Share from 'react-native-share';

// import { shareAlt } from '@fortawesome/free-solid-svg-icons'
import Room from './Room'
import App from '../App'

export default class Home extends Component {
    state={
        pickName:''
    }
 url = 'https://awesome.contents.com/';
 title = 'Awesome Contents';
 message = 'Please check this out.';
 icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';
 options = Platform.select({
  android: {
    activityItemSources: [
      { // For sharing url with custom title.
        placeholderItem: { type: 'url', content: this.url },
        item: {
          default: { type: 'url', content: this.url },
        },
        subject: {
          default: this.title,
        },
        linkMetadata: { originalUrl: this.url,  },
      },
      { // For sharing text.
        placeholderItem: { type: 'text', content: this.message },
        item: {
          default: { type: 'text', content: this.message },
          message: null, // Specify no text to share via Messages app.
        },
        linkMetadata: { // For showing app icon on share preview.
           title: this.message
        },
      },
      { // For using custom icon instead of default text icon at share preview when sharing with message.
        placeholderItem: {
          type: 'url',
          content: this.icon
        },
        item: {
          default: {
            type: 'text',
            content: `${this.message} ${tj=this.url}`
          },
        },
        linkMetadata: {
           title:this.message,
           icon: this.icon
        }
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
  this.props.navigation.navigate('Room')
}
createMeeting = (id) =>{

  this.props.navigation.navigate('Meeting',{id,type:false})
  this.setState({pickName:''})
}
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#f5f5f0'}}>
                <View style={styles.head}>
                     <Image
                        style={styles.tinyLogo}
                        source={require('../assets/conference-icon.png')}
                    />
                    <Text style={{fontSize:30,color:'green'}}>Create or join meating</Text> 
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity 
                    style={[styles.botton,{backgroundColor:'#008000'}]} 
                    onPress={()=>{Share.open(this.options);}}>

                        {/* <FontAwesomeIcon icon={ shareAlt } /> */}
                        <Text style={{color:'#fff'}}> Invite Users </Text>
                    </TouchableOpacity>
                    <TextInput
                      label='Pick Name'
                      placeholder='Pick Name'
                      // returnKeyType='next'
                      onChangeText={value => this.setState({ pickName: value })}
                      style={{height:50}}
                      value={this.state.pickName}
				            />  
                    <TouchableOpacity 
                    style={[styles.botton,{backgroundColor: this.state.pickName ? '#008000' : '#ccc'}]} 
                    onPress={()=>{
                      this.state.pickName.length > 1 &&  this.createMeeting(this.state.pickName)
                    }} >
                        <Text style={{color:'#fff'}}> Create the meating </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{ this.conference() }}>
                  <Text style={styles.bottomButton}> Join a meeting </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    head:{
        flex:4,
        alignItems: 'center',
		justifyContent: 'center',
    },
    bottom:{
        flex:2,
        alignItems: 'center',
        justifyContent: 'space-around',
        // width:'90%',
        backgroundColor:'#fff',
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
        width:100,
    },
    bottomButton:{
      alignSelf:'center',
      justifyContent:'center',
      height:40,
      color:'green',
      fontSize:25
    }
})
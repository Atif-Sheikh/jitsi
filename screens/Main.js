import React, { Component } from 'react';
import { View ,TextInput ,StyleSheet ,Image ,Switch ,TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Meeting from './Meeting'

export default class AnatomyExample extends Component {
  constructor(props){
    super(props)
  }
    state={
        roomName:'',
        isEnabled:false,
        conferenceId:''

    }
    toggleSwitch = () => {
        this.setState({isEnabled:!this.state.isEnabled})
    }

    jionConference = (id) =>{
      //vevify id here
      this.props.navigation.navigate('Meeting',{id,type:this.state.isEnabled})
      this.setState({roomName:''})
    }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#33ccff" }}>
          <Left>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
            <Image
                style={{height:35,width:35}}
                source={require('../assets/menu.png')}
            />
            </TouchableOpacity>
          </Left>
                <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginLeft:'50%'}}>
                    <Text style={{color:'#fff',fontWeight:'bold',}}>Video</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.stateisEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={this.toggleSwitch}
                        value={this.state.isEnabled}
                    />
                    <Text style={{color:'#fff',fontWeight:'bold'}}>Voice</Text>
                </View>
          <Right />
        </Header>
        <Content style={{backgroundColor:'#006666'}}>
          <Text style={{color:'#fff',padding:10,paddingLeft:'5%'}}>Enter room name</Text>
          <View style={{alignItems:'center'}}>
          <TextInput
            label='Pick Name'
            placeholder='    MechanecalForcesBoardJust'
            placeholderTextColor="#fff" 
            // returnKeyType='next'
            value={this.state.roomName}
            onChangeText={value => this.setState({ roomName: value })}
            style={styles.textInput}
            /> 
          </View>
          {this.state.roomName ? <TouchableOpacity  onPress={()=>{this.jionConference(this.state.roomName)}}>
            <Text style={styles.JoinBotton}>Join</Text>
          </TouchableOpacity> : <></>}
        </Content>
        <Footer>
          <FooterTab  style={{ backgroundColor: "#33ccff" }}>
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                  <TouchableOpacity>
                    <Text style={{color:'#fff'}}>Recent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text  style={{color:'#fff'}}>calender</Text>
                  </TouchableOpacity>
              </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    textInput: {
     color: '#fff',
     height:50,
     borderWidth:2,
     borderColor:'#fff',
     width:'90%',
     borderRadius:10
    },
    JoinBotton:{
      color:'#fff',
      backgroundColor:'#006666',
      borderColor:'#fff',
      borderWidth:2,
      width:50,
      borderRadius:10,
      textAlign:'center',
      margin:20
    }
   })
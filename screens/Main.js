import React, { Component } from 'react';
import { View ,TextInput ,StyleSheet ,Image ,Switch ,TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button,Icon, Left, Right, Body, Text } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ToggleSwitch from 'toggle-switch-react-native'

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
      this.props.navigation.navigate('Meeting',{id,type:this.state.isEnabled,name:'new user'})
      this.setState({roomName:''})
    }
  render() {
    return (
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
          <FooterTab  style={{ backgroundColor: "#2ea1f8" }}>
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                  <TouchableOpacity>
                  <Image
                      style={{height:20,width:20,alignSelf:'center'}}
                      source={require('../assets/h5.png')}
                  />
                    <Text style={{color:'#fff'}}>Recent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
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
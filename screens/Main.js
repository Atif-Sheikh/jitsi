import React, { Component } from 'react';
import { View ,TextInput ,StyleSheet ,Image ,Switch ,TouchableOpacity ,ScrollView, RefreshControl ,Dimensions,ImageBackground} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button,Icon, Left, Right, Body, Text } from 'native-base';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import ToggleSwitch from 'toggle-switch-react-native'

const BackgroundImage = (props) => {
  const window = Dimensions.get('window')
  const height = props.height || window.height
  const width = window.width
  const resizeMode = props.resizeMode || 'cover' // cover
  return (
    <Image
      style={[props.styles, {height: height - props.headerSize, width: null, resizeMode: resizeMode }]}
      opacity={1}
      source={props.uri ? {uri: props.uri} : props.source}
    >
      {props.children}
    </Image>
  )
}

export default class AnatomyExample extends Component {
  constructor(props){
    super(props)
  }
    state={
        roomName:'',
        isEnabled:false,
        conferenceId:'',
        text:'    MechanecalForcesBoardJust',
        refreshing: false,
        isModal:false
    }

    toggleSwitch = () => {
        this.setState({isEnabled:!this.state.isEnabled})
    }

    jionConference = (id) =>{
      //vevify id here
      this.props.navigation.navigate('Meeting',{id,type:this.state.isEnabled,name:'new user'})
      this.setState({roomName:''})
    }
    CreateConference = () =>{
      if(this.state.roomName == '' || this.state.roomName == ' ')
      {
        let id = Math.random()

        this.props.navigation.navigate('Meeting',{id,type:this.state.isEnabled,name:'new user'})
      }else{
        this.props.navigation.navigate('Meeting',{id:this.state.roomName,type:this.state.isEnabled,name:'new user'})
      }
      this.setState({roomName:''})
    }
    _onRefresh = () => {
      this.setState({refreshing: true});
      setTimeout(()=>{this.setState({refreshing: false})
    }
      ,1000)
      // fetchData().then(() => {
      //   this.setState({refreshing: false});
      // });
    }
  render() {
    const window = Dimensions.get('window')
    const height =  window.height
    const width = window.width
    return (
      <Container>
        <Header style={{ backgroundColor: "#2ea1f8" }} androidStatusBarColor="#2ea1f8">
          <Left>
            <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
            <Image
                style={{height:16,width:20,marginLeft:5}}
                source={require('../assets/m1.png')}
            />
            </TouchableOpacity>
          </Left>
                <View style={{justifyContent:'center',flexDirection:'row',alignItems:'center',marginLeft:'50%'}}>
                    <Text style={{color:'#fff',fontWeight:'bold',marginHorizontal:5,fontSize:17}}>Video</Text>
                    {/* <ToggleSwitch
                      isOn={this.state.isEnabled}
                      onColor=" #2196c4"
                      offColor="#2196c4"
                      thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                      labelStyle={{ color: "black", fontWeight: "900",}}
                      size="medium"
                      onToggle={(isOn) => this.setState({isEnabled:isOn})}
                    /> */}
                    <Switch
                    trackColor={{ false: "#006666", true: "#006666" }}
                    thumbColor={this.state.isEnabled ? "#81b0ff" : "#81b0ff"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                    />
                    <Text style={{color:'#fff',fontWeight:'bold',marginHorizontal:5,fontSize:17}}>Voice</Text>
                </View>
          <Right />
        </Header>
        <Content style={{backgroundColor:'#006666'}}>
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
        <View style={{height:height-135,width:width}}>
        <Text style={{color:'#fff',padding:10,paddingLeft:'3%',fontSize:18}}>Enter room name</Text>
          <View style={{alignItems:'center'}}>
          <TextInput
            label='Pick Name'
            placeholder={this.state.text}
            placeholderTextColor="#ccc" 
            // returnKeyType='next'
            value={this.state.roomName}
            onChangeText={value => this.setState({ roomName: value })}
            style={styles.textInput}
            onFocus={()=>{this.setState({isModal:true})}}
            /> 
          </View>
          {/* {this.state.roomName ? <TouchableOpacity  onPress={()=>{this.jionConference(this.state.roomName)}}>
            <Text style={styles.JoinBotton}>Join</Text>
          </TouchableOpacity> : <></>} */}
          {this.state.isModal ?
          <View style={styles.modal}>
          <Text style={{textAlign:'center'}}> Enter the name or URL of the room you want to join. You may make a name up,just
                let the people you are meeting know it so that they enter the same name.
          </Text>
          <TouchableOpacity onPress={this.CreateConference}>
            <Text style={styles.createButton}>CREATE / JOIN</Text>
          </TouchableOpacity>
          </View> 
          :<></>
          }          

          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          />
        </View>
      </ImageBackground>
        </Content>
        <Footer>
          <FooterTab  style={{ backgroundColor: "#2ea1f8" }}>
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-evenly'}}>
                  <TouchableOpacity>
                  <Image
                      style={{height:20,width:23,alignSelf:'center'}}
                      source={require('../assets/button.png')}
                  />
                    <Text style={{color:'#fff'}}>Recent</Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
                  <Image
                      style={{height:20,width:20,alignSelf:'center'}}
                      source={require('../assets/home.png')}
                  />
                    <Text style={{color:'#fff'}}>Home</Text>
                  </TouchableOpacity> */}
                  <TouchableOpacity>
                  <Image
                      style={{height:20,width:19,alignSelf:'center'}}
                      source={require('../assets/calendar.png')}
                  />
                  {/* <Icon name='beer' /> */}
                    <Text  style={{color:'#fff'}}>Calender</Text>
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
     width:'95%',
     borderRadius:5,
     fontSize:22
    },
    JoinBotton:{
      color:'#fff',
      backgroundColor:'#2ea1f8',
      borderColor:'#fff',
      borderWidth:2,
      width:50,
      borderRadius:10,
      textAlign:'center',
      margin:20
    },
    container: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center"
      // resizeMode: 'stretch'
      // remove width and height to override fixed static size
      width:'100%' ,
      height: '100%', 
    },
    modal:{
      justifyContent:'center',
      margin:10,
      backgroundColor:'#fff',
      alignItems:'center',
      padding:20,
      borderRadius:5
    },
    createButton:{
      backgroundColor:'#2ea1f8',
      color:'#fff',
      marginTop:10,
      paddingHorizontal:20,
      borderRadius:5,
      paddingVertical:5}
   })
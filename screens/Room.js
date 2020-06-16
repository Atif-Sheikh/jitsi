import React ,{ useCallback } from 'react';
import { Button, View ,StyleSheet ,Image,Text ,TouchableOpacity ,Linking} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Container, Content, Icon, Header, Body } from 'native-base'
import {  StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
// import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,DrawerItem
} from '@react-navigation/drawer';


import Settings from './Settings'
import Terms from './Terms'
import Privacy from './Privacy'
import Help from './Help'
import Main from './Main'
import App from '../App'
import Meetin from './Meeting'
import Home from './Home'



const Drawer = createDrawerNavigator();

const  CustomDrawerContent=({navigation})=> {
  return (
    <DrawerContentScrollView >
      <View style={{justifyContent:'center',width:'100%',alignItems:'center',backgroundColor:'#2ea1f8',height:140,marginTop:-5}}> 
         <Image style={{height:100,width:100,borderRadius:50}} source={require('../assets/p1.png')}/>
         <Text style={{color:'#fff',marginVertical:10}}>me</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Setting')}} style={{marginVertical:15,flexDirection:'row',marginTop:30,width:'100%'}}>
        <Image style={{height:20,width:20,marginHorizontal:8}} source={require('../assets/s3.png')}/>
        <Text style={{fontWeight:'bold'}}> Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{Linking.openURL("https://jitsi.org")}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
         <Image style={{height:18,width:18,marginHorizontal:8}} source={require('../assets/n4.png')}/>
        <Text style={{fontWeight:'bold'}}> Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{Linking.openURL("https://jitsi.org")}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
      <Image style={{height:18,width:18,marginHorizontal:8}} source={require('../assets/n4.png')}/>
        <Text style={{fontWeight:'bold'}}> Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{Linking.openURL("https://jitsi.org")}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
      <Image style={{height:25,width:25,marginHorizontal:7}} source={require('../assets/q2.png')}/>
        <Text style={{fontWeight:'bold',marginTop:1}}> Help</Text>
      </TouchableOpacity>
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
}

class Room extends React.Component {
  URL = "https://google.com";

    render(){
        return (
            <NavigationContainer independent={true} >
                <Drawer.Navigator initialRouteName="Main" drawerContent={props => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name="Main" component={Main} />
                {/* <Drawer.Screen name="Home" component={Home} /> */}
                <Drawer.Screen name="Terms" component={Terms} />
                <Drawer.Screen name="Privacy" component={Privacy} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name="Meeting" component={Meetin} />
                <Drawer.Screen name="Setting" component={Settings} />
                </Drawer.Navigator>
          </NavigationContainer>
        )
    }
}
// const CustomDrawerContentComponent = (props) => (

//     <Container>
//       <Header style={styles.drawerHeader}>
//         <Body>
//           <Image
//             style={styles.drawerImage}
//             source={require('../assets/profile.jpg')} />
//         </Body>
//       </Header>
//       <Content>
//         <DrawerItems {...props} />
//       </Content>
  
//     </Container>
  
//   );
  
// const MyApp = createDrawerNavigator ({

//     // For each screen that you can navigate to, create a new entry like this:
//     Settings: {
//       screen: Settings,
//     },
//     Help: {
//         screen: Help,
//     },
//     Terms: {
//         screen: Terms,
//     },
//     Privacy: {
//         screen: Privacy,
//     },
//     Main: {
//         screen: Main,
//     }    
//   },
//     {
//       initialRouteName: 'Main',
//       drawerPosition: 'left',
//       contentComponent: CustomDrawerContentComponent,
//       drawerOpenRoute: 'DrawerOpen',
//       drawerCloseRoute: 'DrawerClose',
//       drawerToggleRoute: 'DrawerToggle'
//     });

export default Room

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawerHeader: {
      height: 200,
      backgroundColor: 'white'
    },
    drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75
    }
  
  })
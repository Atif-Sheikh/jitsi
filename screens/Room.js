import * as React from 'react';
import { Button, View ,StyleSheet ,Image,Text ,TouchableOpacity} from 'react-native';
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
      <View style={{justifyContent:'center',width:'100%',alignItems:'center'}}> 
         <Image style={{height:100,width:100}} source={require('../assets/profile.jpg')}/>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Settings')}} style={{marginVertical:15,flexDirection:'row',marginTop:40,width:'100%'}}>
        <Image style={{height:20,width:20,marginHorizontal:8}} source={require('../assets/setting.jpg')}/>
        <Text style={{fontWeight:'bold'}}> Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Terms')}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
         <Image style={{height:20,width:20,marginHorizontal:8}} source={require('../assets/notification.png')}/>
        <Text style={{fontWeight:'bold'}}> Terms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Privacy')}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
      <Image style={{height:20,width:20,marginHorizontal:8}} source={require('../assets/notification.png')}/>
        <Text style={{fontWeight:'bold'}}> Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Help')}} style={{marginVertical:15,flexDirection:'row',width:'100%'}}>
      <Image style={{height:18,width:18,marginHorizontal:8}} source={require('../assets/help.png')}/>
        <Text style={{fontWeight:'bold'}}> Help</Text>
      </TouchableOpacity>
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
}

class Room extends React.Component {


    render(){
        return (
            <NavigationContainer independent={true} >
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props}/>}>
                <Drawer.Screen name="Main" component={Main} />
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Settings" component={Settings} />
                <Drawer.Screen name="Terms" component={Terms} />
                <Drawer.Screen name="Privacy" component={Privacy} />
                <Drawer.Screen name="Help" component={Help} />
                <Drawer.Screen name="Meeting" component={Meetin} />
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
import * as React from 'react';
import { Button, View ,StyleSheet ,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Container, Content, Icon, Header, Body } from 'native-base'
import {  StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
// import { createDrawerNavigator } from 'react-navigation-drawer';

import Settings from './Settings'
import Terms from './Terms'
import Privacy from './Privacy'
import Help from './Help'
import Main from './Main'
import App from '../App'
import Meetin from './Meeting'

const Drawer = createDrawerNavigator();

class Room extends React.Component {

    render(){
        return (
            <NavigationContainer independent={true} >
                <Drawer.Navigator initialRouteName="Main">
                <Drawer.Screen name="Main" component={Main} options={{drawerIcon: () => <Image style={{height:20,width:20}} source={require('../assets/conference-icon.png')}/> }}/>
                <Drawer.Screen name="Settings" component={Settings} options={{drawerIcon: () => <Image style={{height:20,width:20}} source={require('../assets/setting.jpg')}/> }}/>
                <Drawer.Screen name="Terms" component={Terms} options={{drawerIcon: () => <Image style={{height:20,width:20}} source={require('../assets/notification.png')}/> }}/>
                <Drawer.Screen name="Privacy" component={Privacy} options={{drawerIcon: () => <Image style={{height:20,width:20}} source={require('../assets/notification.png')}/> }}/>
                <Drawer.Screen name="Help" component={Help} options={{drawerIcon: () => <Image style={{height:20,width:20}} source={require('../assets/help.png')}/> }}/>
                <Drawer.Screen name="Meeting" component={Meetin} options={{drawerLabel: () => null,title: null,drawerIcon: () => null,}}/>
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
import React, { useEffect } from 'react';
import {Text} from 'react-native'

import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

import HomeScreen from './screens/Home'
import Room from './screens/Room'
import Meeting from './screens/Meeting'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
 
library.add( faCheckSquare, faCoffee)

function App() {

  // useEffect(() => {
  //   setTimeout(() => {
  //     const url = 'https://meet.jit.si/exemple';
  //     const userInfo = {
  //       displayName: 'User',
  //       email: 'user@example.com',
  //       avatar: 'https:/gravatar.com/avatar/abc123',
  //     };
  //     JitsiMeet.call(url, userInfo);
  //     /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
  //     /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
  //   }, 1000);
  // }, [])

  // useEffect(() => {
  //   return () => {
  //     JitsiMeet.endCall();
  //   };
  // });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent)
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  const Stack = createStackNavigator();
  return (
    // <Text>asd</Text>
    // <JitsiMeetView
    //   onConferenceTerminated={e => onConferenceTerminated(e)}
    //   onConferenceJoined={e => onConferenceJoined(e)}
    //   onConferenceWillJoin={e => onConferenceWillJoin(e)}
    //   style={{
    //     flex: 1,
    //     height: '100%',
    //     width: '100%',
    //   }}
    // />
    // <Room/>
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" independent={true}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Meeting" component={Meeting} options={{headerShown: false}}/>
      {/* <Stack.Screen name="Meeting" >
        {props => <Meeting {...props} />}
      </Stack.Screen> */}
      <Stack.Screen name="Room" component={Room} options={{title:'Back'}} options={{headerShown: false}}/>
      {/* <Stack.Screen name="Meeting" component={Meeting} options={{headerShown: false}} /> */}
    </Stack.Navigator>
    </NavigationContainer>
    // <Meeting/>
  )
}
export default App;
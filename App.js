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
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Room" independent={true}>
      <Stack.Screen name="Room" component={Room} options={{title:'Back'}} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
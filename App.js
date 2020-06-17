import React, { useEffect } from 'react';

import HomeScreen from './screens/Home'
import Meeting from './screens/Meeting'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

console.disableYellowBox = true;

function App() {

  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home" independent={true}>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Meeting" component={Meeting} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
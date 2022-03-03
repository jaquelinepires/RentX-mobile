import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home'
import { CarDetails } from '../screens/CarDetails'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { SchedulingDetails } from '../screens/SchedulingDetails'

const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetails"component={CarDetails} />
      <Stack.Screen name="Scheduling"component={Scheduling}/>
      <Stack.Screen name="SchedulingComplete" component={SchedulingComplete}/>
      <Stack.Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Stack.Navigator>
  )
}
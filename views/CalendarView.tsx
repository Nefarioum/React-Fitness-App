import { Image, ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { CalendarList } from 'react-native-calendars';

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { useTailwind } from 'tailwind-rn'

import React from 'react'
import NavigationComponent from '../components/NavigationComponent';

const CalendarView = () => {
  const tailwind = useTailwind();
  const Stack = createNativeStackNavigator();

  return (
    <View>
        <CalendarList
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            pastScrollRange={50}
            futureScrollRange={50}
            scrollEnabled={true}
            showScrollIndicator={true}
            />

    <NavigationComponent />
    </View>
  )
}

export default CalendarView
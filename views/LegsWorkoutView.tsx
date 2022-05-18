import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { useTailwind } from 'tailwind-rn'

import React, { useState } from 'react'
import NavigationComponent from '../components/NavigationComponent';
import { CheckBox } from 'react-native-elements';

const LegsWorkoutView = () => {
  const [check1, setCheck1] = useState(false);

  const tailwind = useTailwind();
  const Stack = createNativeStackNavigator();

  return (
    <View style={tailwind(`h-full bg-gray-100`)}>
      <View style={tailwind(`h-1/6 flex flex-row bg-blue-600`)}>
        <View style={tailwind(`p-6 justify-center mt-8`)}>
            <Text style={tailwind(`text-3xl font-bold text-white text-center`)}> Legs Workout </Text>
            <Text style={tailwind(`text-xl text-white text-center`)}> This will take 50 minutes and contains 10 exercises. </Text>
        </View>
       </View>

        <View style={tailwind(`w-full p-3 flex items-center mt-3`)}>
          <Text style={tailwind(`text-xl font-bold`)}>1. Move your left leg upwards 45%</Text>
          <Text style={tailwind(`text-gray-500 font-semibold mt-1 `)}>Hold in this position for 5 minutes.</Text>

          <CheckBox
            containerStyle ={{backgroundColor: 'transparent', borderWidth: 0}}
            center
            title="Mark here once completed"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            />
        </View>

        <View style={tailwind(`w-full p-3 flex items-center`)}>
          <Text style={tailwind(`text-xl font-bold`)}>2. Move your left leg upwards 45%</Text>
          <Text style={tailwind(`text-gray-500 font-semibold mt-1 `)}>Hold in this position for 5 minutes.</Text>

          <CheckBox
            containerStyle ={{backgroundColor: 'transparent', borderWidth: 0}}
            center
            title="Mark here once completed"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            />
        </View>


        <View style={tailwind(`w-full p-3 flex items-center `)}>
          <Text style={tailwind(`text-xl font-bold`)}>3. Move your left leg upwards 45%</Text>
          <Text style={tailwind(`text-gray-500 font-semibold mt-1 `)}>Hold in this position for 5 minutes.</Text>

          <CheckBox
            containerStyle ={{backgroundColor: 'transparent', borderWidth: 0}}
            center
            title="Mark here once completed"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            />
        </View>


        <View style={tailwind(`w-full p-3 flex items-center`)}>
          <Text style={tailwind(`text-xl font-bold`)}>4. Move your left leg upwards 45%</Text>
          <Text style={tailwind(`text-gray-500 font-semibold mt-1 `)}>Hold in this position for 5 minutes.</Text>

          <CheckBox
            containerStyle ={{backgroundColor: 'transparent', borderWidth: 0}}
            center
            title="Mark here once completed"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            />
        </View>


        <View style={tailwind(`w-full p-3 flex items-center`)}>
          <Text style={tailwind(`text-xl font-bold`)}>5. Move your left leg upwards 45%</Text>
          <Text style={tailwind(`text-gray-500 font-semibold mt-1 `)}>Hold in this position for 5 minutes.</Text>

          <CheckBox
            containerStyle ={{backgroundColor: 'transparent', borderWidth: 0}}
            center
            title="Mark here once completed"
            checked={check1}
            onPress={() => setCheck1(!check1)}
            />
        </View>
        

        <NavigationComponent/>

    </View>
  )
}

export default LegsWorkoutView
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn'

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react'

interface SportsData {
  id: number, 
  text: string, 
  selected: boolean, 
  key: string
}

const sportData: SportsData[] = [
  {
    id: 1,
    text: "🏃Running",
    selected: false,
    key: "running"
  },
  {
    id: 2,
    text: "🚲 Cycling",
    selected: false,
    key: "cycling"
  },
  {
    id: 3,
    text: "🏊 Swimming",
    selected: false,
    key: "swimming"
  },
  {
    id: 4,
    text: "🥊 Boxing",
    selected: false,
    key: "boxing"
  },
  {
    id: 5,
    text: "⚽ Football",
    selected: false,
    key: "football"
  },
  {
    id: 6,
    text: "🎾 Tennis",
    selected: false,
    key: "tennis"
  },
  {
    id: 7,
    text: "🏋️ Weights",
    selected: false,
    key: "weight"
  },
  {
    id: 8,
    text: "🍳 Recipes",
    selected: false,
    key: "recipes"
  },
  {
    id: 9,
    text: "🧘 Yoga",
    selected: false,
    key: "yoga"
  },
  {
    id: 10,
    text: "🏀 Basketball",
    selected: false,
    key: "basketball"
  },
  {
    id: 11,
    text: "🚵 Spinning",
    selected: false,
    key: "spinning"
  },
  {
    id: 12,
    text: "🙆‍♀️ Pilates",
    selected: false,
    key: "pilates"
  }
];

const WelcomeView = () => {
  const [selected, setSelected] = useState(-1);

  const Navigation = useNavigation<NativeStackNavigationProp<{route: {} }>>();
  const tailwind = useTailwind();
  return (
    <View style={tailwind(`bg-blue-100 h-full`)}>
      <View style={tailwind(`bg-white h-4/5 w-full flex-col absolute inset-x-0 bottom-0 rounded-t-xl rounded-t-2xl`)}>
        <View style={[tailwind(`h-24 w-24 bg-white rounded-full absolute justify-center items-center`), {left: '38%', right: '38%',top: '-7%', shadowColor: '#000000', shadowRadius: 2, shadowOpacity: 1.0, shadowOffset: { width: 0.1, height: 0.1}}]}>
            <Text style={[tailwind(`text-4xl h-20 w-20 text-center`), {top: '20%'}]}>👋</Text>
        </View>
        <Text style={tailwind(`text-3xl text-center mt-14`)}>Hey there!</Text>
        <Text style={tailwind(`text-base px-4 text-center mt-3 font-semibold`)}>Welcome to Your Fitness.</Text>
        <Text style={tailwind(`text-base px-4 text-center mt-4`)}>A app all about your fitness! Please select some of your favourite activies from the options below so we can give you the best experience!</Text>

        <ScrollView>
        <View style={tailwind(`m-9 mt-4 ml-9 flex-row flex-wrap`)}>
          {sportData.map((item, index) => {
            return (
              <TouchableOpacity 
                key={item.id}
                onPress={() => {
                  sportData[index].selected = !sportData[index].selected
                  setSelected(item.id + (sportData[index].selected ? 1 : 2));
                  console.log(`${sportData[index].text} selected status: - ${sportData[index].selected}`)
                }}
                style={[tailwind(`ml-4 mb-4 rounded-xl bg-white w-40`), item.selected ? tailwind(`bg-blue-500 text-white`) : tailwind(`bg-white border border-gray-500`)]}>
                    <Text style={[tailwind(`text-lg p-2 text-black text-center font-semibold`), item.selected ? tailwind(`text-white`) : tailwind(`text-black`)]}>{item.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        </ScrollView>

        <View style={tailwind(`items-center`)}>
          <TouchableOpacity
                  onPress={() => Navigation.replace('HomeView' as never, [] as never)}
                  disabled={(sportData.every(v => v.selected === false) ? true : false)}
                  style={[tailwind(`ml-4 border-gray-500 rounded-full w-80`), (sportData.every(v => v.selected === false) ? tailwind(`bg-gray-300`) : tailwind(`bg-blue-500`))]}>
                      <Text style={tailwind(`text-lg p-2 text-white text-center`)}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity 
                  onPress={() => Navigation.replace('HomeView' as never, [] as never)}
                  style={tailwind(`ml-4 mb-4 rounded-full w-80`)}>
                      <Text style={tailwind(`text-lg p-2 text-black text-center`)}>Not now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default WelcomeView
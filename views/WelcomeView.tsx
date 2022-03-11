import { Text, TouchableOpacity, View } from 'react-native'
import { useTailwind } from 'tailwind-rn'

import React from 'react'

const sportData = [
  {
    id: 1,
    text: "🏃Running",
    key: "running"
  },
  {
    id: 2,
    text: "🚲 Cycling",
    key: "cycling"
  },
  {
    id: 3,
    text: "🏊 Swimming",
    key: "swimming"
  },
  {
    id: 4,
    text: "🥊 Boxing",
    key: "boxing"
  },
  {
    id: 5,
    text: "⚽ Football",
    key: "boxing"
  },
  {
    id: 6,
    text: "🎾 Tennis",
    key: "tennis"
  },
  {
    id: 7,
    text: "🏋️ Weights",
    key: "weight"
  },
  {
    id: 8,
    text: "🍳 Recipes",
    key: "recipes"
  },
  {
    id: 9,
    text: "🧘 Yoga",
    key: "yoga"
  },
  {
    id: 10,
    text: "🏀 Basketball",
    key: "basketball"
  },
  {
    id: 11,
    text: "🚵 Spinning",
    key: "basketball"
  },
  {
    id: 12,
    text: "🙆‍♀️ Pilates",
    key: "pilates"
  }
];

const WelcomeView = () => {
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

        <View style={tailwind(`m-9 mt-4 ml-9 flex-row flex-wrap`)}>
          {sportData.map((item) => {
            return (
              <TouchableOpacity 
                key={item.id}
                style={tailwind(`border ml-4 mb-4 border-gray-500 rounded-xl bg-white w-40`)}>
                    <Text style={tailwind(`text-lg p-2 text-black text-center font-semibold`)}>{item.text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={tailwind(`items-center`)}>
          <TouchableOpacity 
                  style={tailwind(`bg-blue-500 ml-4 border-gray-500 rounded-full w-80`)}>
                      <Text style={tailwind(`text-lg p-2 text-white text-center`)}>Continue</Text>
          </TouchableOpacity>

          <TouchableOpacity 
                  style={tailwind(`ml-4 mb-4 rounded-full w-80`)}>
                      <Text style={tailwind(`text-lg p-2 text-black text-center`)}>Not now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default WelcomeView
import { View, SafeAreaView, Text} from 'react-native'

import { useTailwind } from 'tailwind-rn'

import ExampleCard from '../components/ExampleCard';

const HomeView = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind(`bg-white h-full`)}>
      <View style={tailwind(`p-5`)}>
        <Text>Fitness App</Text>
        <ExampleCard />
      </View>
    </SafeAreaView> 
  )
}

export default HomeView

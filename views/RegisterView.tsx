import { View, SafeAreaView, Text} from 'react-native'

import tw from 'tailwind-react-native-classnames'

import ExampleCard from '../components/ExampleCard';

const HomeView = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text>Fitness App</Text>
        <ExampleCard />
      </View>
    </SafeAreaView> 
  )
}

export default HomeView

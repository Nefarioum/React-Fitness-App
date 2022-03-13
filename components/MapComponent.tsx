import React from 'react'
import MapView from 'react-native-maps'
import { useTailwind } from 'tailwind-rn/dist';

const MapComponent = () => {
  const tailwind = useTailwind();

  return (
    <MapView
        style = {tailwind(`flex-1`)}
        initialRegion={{
          latitude: 50.743407570472336,
          longitude: -1.898896997420026,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
     </MapView>
  )
}

export default MapComponent
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useTailwind } from 'tailwind-rn/dist';

const mapRef = React.createRef<MapView>();

interface Location {
    latitude: number,
    longitude: number
}
interface EventsData {
    id: number, 
    name: string, 
    description: string,
    location: Location,
    marker: any
}

const EventsData : EventsData[] = [
    {
        id: 0,
        name: 'Football Training Session',
        description: 'A football training session held at Talbot Campus at 6:00 PM',
        location: {
            latitude: 50.7431407570472336,
            longitude: -1.896836997420026
        },
        marker: React.createRef<Marker>()
    },
    {
        id: 1,
        name: 'Field Track Session',
        description: 'A field track session at Talbot Campus at 5 PM',
        location: {
            latitude: 50.743407570472336,
            longitude: -1.898796997420026
        },
        marker: React.createRef<Marker>()
    },
    {
        id: 2,
        name: 'Yoga Session',
        description: 'A yoga session at Talbot Campus at 3 PM',
        location: {
            latitude: 50.741407570472336,
            longitude: -1.899796997420026
        },
        marker: React.createRef<Marker>()
    },
    {
        id: 3,
        name: 'Spinning Session',
        description: 'A spinning session at Talbot Campus at 2 PM',
        location: {
            latitude: 50.744507570472336,
            longitude: -1.899796997420026
        },
        marker: React.createRef<Marker>()
    }
];

const MapComponent = () => {
  const tailwind = useTailwind();

  return (
    <MapView
        ref={mapRef}
        style = {tailwind(`flex-1`)}
        initialRegion={{
          latitude: 50.743407570472336,
          longitude: -1.898896997420026,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {EventsData.map((item, index) => {
            return(
                <Marker
                    ref={item.marker}
                    key={item.id}
                    coordinate={{
                        latitude: item.location.latitude,
                        longitude: item.location.longitude
                    }}
                    title = {item.name}
                    description = {item.description}
                    identifier = {item.name}
                />
            );
        })}
     </MapView>
  )
}

export { MapComponent, EventsData, mapRef }
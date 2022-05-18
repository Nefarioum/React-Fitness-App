import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { Agenda } from 'react-native-calendars';

import { useTailwind } from 'tailwind-rn'

import React, { useState } from 'react'
import NavigationComponent from '../components/NavigationComponent';
import { Card } from 'react-native-elements';

const TimeStringified = (time: any) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};
  
const CalendarView = () => {
    const tailwind = useTailwind();
    const [items, setItems] = useState({});

    const loadItems = (day: any) => {
      setTimeout(() => {
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = TimeStringified(time);
          //@ts-ignore
          if (!items[strTime]) {
            //@ts-ignore
            items[strTime] = [];
            const numItems = 1;
            for (let j = 0; j < numItems; j++) {
            // @ts-ignore
              items[strTime].push({
                name: 'Workout event',
                height: Math.max(50, Math.floor(Math.random() * 150)),
              });
            }
          }
        }
        const newItems = {};
        Object.keys(items).forEach((key) => {
          // @ts-ignore
          newItems[key] = items[key];
        });
        setItems(newItems);
      }, 1000);
    };
  
    const renderItem = (item: any) => {
      return (
        <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
          <Card containerStyle={{borderWidth: 0,}}>
            <Card containerStyle={{borderWidth: 0, borderRadius: 0, shadowColor: 'rgba(0,0,0, 0.0)', shadowOffset: { height: 0, width: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0 }}> 
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>{item.name}</Text>
              </View>
            </Card>
          </Card>
        </TouchableOpacity>
      );
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2022-05-18'}
          renderItem={renderItem}
        />

        <NavigationComponent/>
      </SafeAreaView>
    );
}

export default CalendarView
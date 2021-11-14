import React from 'react'
import { FlatList, Text, View, } from 'react-native'


import { useLesson } from '../hooks/useLesson';
import { LessonCard } from '../components/LessonCard';

export const HomeScreen = () => {

     const { lessonList } = useLesson();
     return (
         
            <View
                style={{ alignItems: 'center' }}
            >
                <Text>Trip</Text>
                <FlatList 
                    data={lessonList}
                    renderItem={ ({ item }) => ( <LessonCard lesson={ item } /> )}
                    horizontal= {true}

                />
                <FlatList 
                    data={ lessonList }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    renderItem={ ({ item }) => ( <LessonCard lesson={ item } /> )}

                />
            </View>
    )
}

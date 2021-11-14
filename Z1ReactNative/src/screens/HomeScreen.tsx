import React from 'react'
import { FlatList, Text, View, } from 'react-native'


import { useLesson } from '../hooks/useLesson';
import { LessonCard } from '../components/LessonCard';
import { CategoryCard } from '../components/CategoryCard';
import { useCategoryList } from '../hooks/useCategory';

export const HomeScreen = () => {

     const { lessonList } = useLesson();
     const { categoryList } = useCategoryList();

     return (
         
            <View
                style={{ alignItems: 'center' }}
            >
                <Text>Trip</Text>
                <FlatList 
                    data={categoryList}
                    renderItem={ ({ item }) => ( <CategoryCard title={ item } /> )}
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

import React, { useMemo } from 'react'
import { FlatList, View, StyleSheet } from 'react-native';


import { useLesson } from '../hooks/useLesson';
import { LessonCard } from '../components/LessonCard';
import { CategoryCard } from '../components/CategoryCard';
import { useCategoryList } from '../hooks/useCategory';
import { useState } from 'react';
import { CategoryBar, Title } from '../themes/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {

     const { lessonList } = useLesson();
     const { categoryList } = useCategoryList();
     const [categoria, setCategoria] = useState<string>('All');
     
     const filteredList = useMemo(
        () => {
          if (categoria === 'All' ) return lessonList
          return lessonList.filter(lesson => categoria === lesson.category.title)
        },
        [categoria, lessonList]
      )


     return (

            <SafeAreaView
                style={{ alignItems: 'center' }}
            >
                <Title>Learn</Title>
                <CategoryBar 
                    data={categoryList}
                    renderItem={ ({ item }) => ( <CategoryCard title={ item }  setCategoria={setCategoria}/> )}
                    horizontal= {true}

                />
                
                <FlatList 
                    data={ filteredList }
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }

                    renderItem={ ({ item }) => ( <LessonCard lesson={ item }/> )}

                />
            </SafeAreaView>
    )
}
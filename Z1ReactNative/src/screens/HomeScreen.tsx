import React, { useMemo } from 'react'
import { FlatList, Text, View, } from 'react-native'


import { useLesson } from '../hooks/useLesson';
import { LessonCard } from '../components/LessonCard';
import { CategoryCard } from '../components/CategoryCard';
import { useCategoryList } from '../hooks/useCategory';
import { useState } from 'react';
import { Title } from '../themes/appTheme';

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
            <View
                style={{ alignItems: 'center' }}
            >
                <Title>Learn</Title>
                <FlatList 
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
            </View>
    )
}

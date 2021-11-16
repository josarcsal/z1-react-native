import React, { useMemo } from 'react'
import { FlatList, View, StyleSheet } from 'react-native';


import { useLesson } from '../hooks/useLesson';
import { LessonCard } from '../components/LessonCard';
import { CategoryCard } from '../components/CategoryCard';
import { useCategoryList } from '../hooks/useCategory';
import { useState } from 'react';
import { CategoryBar, Title } from '../themes/appTheme';
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
                    showsHorizontalScrollIndicator={ false }
                    renderItem={ ({ item }) => (<CategoryCard
                    title={ item } categoriaActual={categoria} setCategoria={setCategoria}/> )}
                    horizontal= {true}
                    

                />
                
                {categoria === 'All' ?
                <FlatList 
                    key= {'2columnas'}
                    data={ filteredList }
                    showsVerticalScrollIndicator={ false }
                    numColumns = { 2 }  

                    renderItem={ ({ item }) => (<LessonCard lesson={ item } categoria = {categoria}/>)}
                />
                 :
                <FlatList 
                    key= {'1columna'}
                    data={ filteredList }
                    showsVerticalScrollIndicator={ false }
                    numColumns = { 1 }  
                    renderItem={ ({ item }) => (<LessonCard lesson={ item } categoria = {categoria}/> )}
                />
                }
            </SafeAreaView>
    )
}
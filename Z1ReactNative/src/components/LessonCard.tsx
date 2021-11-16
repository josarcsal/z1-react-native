import { useNavigation } from '@react-navigation/core';
import React, {useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson } from '../interfaces/LessonInterface';
import { LessonCardContainer, LessonCardImage, LessonCardCategory, LessonCardTitle, LessonCardAuthor, HorizontalLessonCardContainer, HorizontalLessonCardAuthor, HorizontalLessonCardTitle, HorizontalLessonCardCategory, HorizontalLessonCardImage } from '../themes/appTheme';

const windowWidth = Dimensions.get('window').width

interface Props {
    lesson: Lesson;
    categoria: string;
}

export const LessonCard = ({ lesson, categoria }: Props ) => {

    const [bgColor, setBgColor] = useState('grey');
    const navigation = useNavigation();
    const urlImagen = lesson.image; 
        return (
            <TouchableOpacity
                activeOpacity={ 0.9 } 
                onPress={ 
                    () => navigation.navigate('LessonScreen', { 
                        lesson: lesson
                    }) 
                } 
            >
                {categoria === 'All' ?
                <LessonCardContainer style={{width: windowWidth * 0.45}}>
                    <LessonCardImage
                        source={{
                        uri: urlImagen,
                        }}
                    />
                    <LessonCardCategory>{lesson.category.title}</LessonCardCategory>
                    <LessonCardTitle>{lesson.title}</LessonCardTitle>
                    <LessonCardAuthor>{lesson.author}</LessonCardAuthor>
    
                </LessonCardContainer> 
                :
                <HorizontalLessonCardContainer style={{width: windowWidth * 0.9}}>
                    <HorizontalLessonCardImage
                        source={{
                        uri: urlImagen,
                        }}
                    /> 
                    <HorizontalLessonCardCategory>Article</HorizontalLessonCardCategory>
                    <HorizontalLessonCardTitle>{lesson.title}</HorizontalLessonCardTitle>
                    <HorizontalLessonCardAuthor>{lesson.author}</HorizontalLessonCardAuthor>
    
                </HorizontalLessonCardContainer>
                }
            </TouchableOpacity>
                
        )
}
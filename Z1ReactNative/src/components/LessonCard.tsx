import { useNavigation } from '@react-navigation/core';
import React, {useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson } from '../interfaces/LessonInterface';
import { LessonCardContainer, LessonCardImage, LessonCardCategory, LessonCardTitle, LessonCardAuthor } from '../themes/appTheme';

const windowWidth = Dimensions.get('window').width

interface Props {
    lesson: Lesson;
}

export const LessonCard = ({ lesson}: Props ) => {

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
            </TouchableOpacity>
        )
}
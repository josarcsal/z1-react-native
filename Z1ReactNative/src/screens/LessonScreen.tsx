import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { LessonScreenContainer, LessonScreenTitle, LessonScreenArticle, LessonScreenImage, LessonScreenText } from '../themes/appTheme';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'LessonScreen'> {};

export const LessonScreen = ({navigation, route}: Props) => {

    const { lesson } = route.params;

    return (
        <ScrollView
                showsVerticalScrollIndicator={ false }
                style={{
                    ...StyleSheet.absoluteFillObject,
                }}
        >
            <LessonScreenContainer>

                <LessonScreenArticle>Article </LessonScreenArticle>
                <LessonScreenTitle>{lesson.title }</LessonScreenTitle>
                <LessonScreenText>{lesson.author }</LessonScreenText>
                <LessonScreenImage source={{ uri: lesson.image}}/>
                <LessonScreenText>{ lesson.content }</LessonScreenText>
            
        </LessonScreenContainer>   
    </ScrollView> 
    )
}
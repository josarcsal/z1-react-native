import { useNavigation } from '@react-navigation/core';
import React, {useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson } from '../interfaces/LessonInterface';
import { CategoryCardContainer, CategoryCardName } from '../themes/appTheme';


interface Props {
    title: string;
    setCategoria: React.Dispatch<React.SetStateAction<string>>;
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height




export const CategoryCard = ({title, setCategoria} : Props ) => {

    const [bgColor, setBgColor] = useState('grey');
    // const navigation = useNavigation();

    return (
        
        <TouchableOpacity
            activeOpacity={ 0.9 } 
            onPress={ () => setCategoria(title)}
        >
            <CategoryCardContainer>
                    <CategoryCardName>
                        { title }
                    </CategoryCardName>
            </CategoryCardContainer>
            
        </TouchableOpacity>
    )
}
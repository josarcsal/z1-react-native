import { useNavigation } from '@react-navigation/core';
import React, {useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { Lesson } from '../interfaces/LessonInterface';


interface Props {
    title: string;
}

const windowWidth = Dimensions.get('window').width

export const CategoryCard = ({title} : Props ) => {

    const [bgColor, setBgColor] = useState('grey');
    // const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={ 0.9 } 
            // onPress={ 
            //     () => navigation.navigate('LessonScreen', { 
            //         simpleLesson: lesson,
            //         color: bgColor
            //     }) 
            // } 
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.1,
                backgroundColor: bgColor
            }}>
                <View>

                    <Text style={ styles.name }>
                        { title }
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        // backgroundColor: 'grey',
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
});
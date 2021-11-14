import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends StackScreenProps<RootStackParams, 'LessonScreen'> {};

export const LessonScreen = ({navigation, route}: Props) => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
        {/* Heade Containerr */}
        <View style={{
            ...styles.headerContainer,
            backgroundColor: 'grey',
        }}>
            {/* Backbutton */}
            <TouchableOpacity
                onPress={ () => navigation.pop() }
                activeOpacity={0.8}
                style={{
                    ...styles.backButton,
                    top: top + 5
                }}
            >
                
            </TouchableOpacity>

            <Text
                style={{
                    ...styles.name,
                    top: top + 40
                }}
            >
                Paagina2
            </Text>            
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20
    },
    name: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20
    }
});

import { StyleSheet, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
});


export const Title = styled.Text`
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: #FFFFFF;
`;

//LESSON CARD

export const LessonCardContainer = styled.View`
    margin-horizontal: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #60306f;
    shadow-color: #000;
    elevation: 5;
    height:300px;
`;

export const LessonCardImage = styled.Image`
    width: 100%;
    height: 38%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const LessonCardCategory = styled.Text` 
    margin-horizontal: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    color: #fddb6f;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const LessonCardTitle = styled.Text` 
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
`;

export const LessonCardAuthor = styled.Text` 
    margin-horizontal: 10px;
    margin-bottom: 5px;
    color: #FFFFFF;
    font-size: 13px;
`;
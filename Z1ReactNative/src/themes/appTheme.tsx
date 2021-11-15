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

//HOMESCREEN

export const Title = styled.Text`
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0.25px;
    color: #FFFFFF;
`;

export const CategoryBar = styled.FlatList`
    margin-top: 12px;
    margin-bottom: 32px;
    margin-left: 10px;
    haight: 50px;
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

//CATEGORIES

export const CategoryCardContainer = styled.View`
    margin-horizontal: 7px;
    margin-bottom: 7px;
    border-radius: 10px;
    background-color: #593c71;
    shadow-color: #000;
    elevation: 5;
    height: 37px;
`;

export const CategoryCardName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-horizontal: 10px;
    margin-vertical: 6px;
    elevation: 5;
    align-self: center;
`;

//LESSON SCREEN

export const LessonScreenContainer = styled.View`
    flex:1;
    align-content: center;
    margin-horizontal: 20px;
    margin-top: 20px;
`;

export const LessonScreenArticle = styled.Text`
    font-size: 13px;
    text-transform: uppercase;
    color: #fddb6f;
    margin-horizontal: 10px;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const LessonScreenTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    margin-horizontal: 10px;
    margin-vertical: 7px;
`;

export const LessonScreenText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
    margin-horizontal: 10px;
    margin-vertical: 7px;
`;

export const LessonScreenImage = styled.Image`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-vertical: 7px;
`;

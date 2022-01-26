import React from 'react';
import {
  HorizontalLessonCardAuthor,
  HorizontalLessonCardCategory,
  HorizontalLessonCardContainer,
  HorizontalLessonCardImage,
  HorizontalLessonCardTitle,
} from './styles';
import {} from './styles';

export const HorizontalLessonCard = () => {
  return (
    <HorizontalLessonCardContainer>
      <HorizontalLessonCardImage
        source={{
          uri: 'https://placeimg.com/640/360/animals',
        }}
      />
      <HorizontalLessonCardCategory>Article</HorizontalLessonCardCategory>
      <HorizontalLessonCardTitle>Title</HorizontalLessonCardTitle>
      <HorizontalLessonCardAuthor>Author</HorizontalLessonCardAuthor>
    </HorizontalLessonCardContainer>
  );
};

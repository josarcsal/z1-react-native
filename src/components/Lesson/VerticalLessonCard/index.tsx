import React from 'react';
import {
  VerticalLessonCardAuthor,
  VerticalLessonCardCategory,
  VerticalLessonCardContainer,
  VerticalLessonCardTitle,
  VerticalLessonCardImage,
} from './styles';

export const VerticalLessonCard = () => {
  return (
    <VerticalLessonCardContainer>
      <VerticalLessonCardImage
        source={{
          uri: 'https://placeimg.com/640/360/animals',
        }}
      />
      <VerticalLessonCardCategory>Category</VerticalLessonCardCategory>
      <VerticalLessonCardTitle>Title</VerticalLessonCardTitle>
      <VerticalLessonCardAuthor>Author</VerticalLessonCardAuthor>
    </VerticalLessonCardContainer>
  );
};

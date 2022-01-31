import React from 'react';
import {
  VerticalLessonCardAuthor,
  VerticalLessonCardCategory,
  VerticalLessonCardContainer,
  VerticalLessonCardTitle,
} from './styles';

export const VerticalLessonCard = () => {
  return (
    <VerticalLessonCardContainer>
      <VerticalLessonCardCategory>Category</VerticalLessonCardCategory>
      <VerticalLessonCardTitle>Title</VerticalLessonCardTitle>
      <VerticalLessonCardAuthor>Author</VerticalLessonCardAuthor>
    </VerticalLessonCardContainer>
  );
};

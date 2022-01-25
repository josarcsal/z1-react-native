import React from 'react';
import {
  HorizontalLessonCardAuthor,
  HorizontalLessonCardCategory,
  HorizontalLessonCardContainer,
  HorizontalLessonCardTitle,
} from './styles';
import {} from './styles';

export const HorizontalLessonCard = () => {
  return (
    <HorizontalLessonCardContainer>
      <HorizontalLessonCardCategory>Category</HorizontalLessonCardCategory>
      <HorizontalLessonCardTitle>Title</HorizontalLessonCardTitle>
      <HorizontalLessonCardAuthor>Author</HorizontalLessonCardAuthor>
    </HorizontalLessonCardContainer>
  );
};

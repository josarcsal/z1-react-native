import React, { FC, useCallback, memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  HorizontalLessonCardAuthor,
  HorizontalLessonCardCategory,
  HorizontalLessonCardContainer,
  HorizontalLessonCardImage,
  HorizontalLessonCardTitle,
} from './styles';
import { Props } from './types';

export const HorizontalLessonCard: FC<Props> = ({ lesson, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(lesson);
  }, [onPress, lesson]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <HorizontalLessonCardContainer>
        <HorizontalLessonCardImage
          source={{
            uri: lesson?.image,
          }}
        />
        <HorizontalLessonCardCategory>
          {lesson?.category.title}
        </HorizontalLessonCardCategory>
        <HorizontalLessonCardTitle>{lesson?.title}</HorizontalLessonCardTitle>
        <HorizontalLessonCardAuthor>
          {lesson?.author}
        </HorizontalLessonCardAuthor>
      </HorizontalLessonCardContainer>
    </TouchableOpacity>
  );
};

export default memo(HorizontalLessonCard);

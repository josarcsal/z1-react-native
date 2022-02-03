import React, { FC, useCallback, memo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  VerticalLessonCardAuthor,
  VerticalLessonCardCategory,
  VerticalLessonCardContainer,
  VerticalLessonCardTitle,
  VerticalLessonCardImage,
} from './styles';
import { Props } from './types';

export const VerticalLessonCard: FC<Props> = ({ lesson, onPress }) => {
  const handlePress = useCallback(() => {
    onPress(lesson);
  }, [onPress, lesson]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <VerticalLessonCardContainer>
        <VerticalLessonCardImage
          source={{
            uri: lesson?.image,
          }}
        />
        <VerticalLessonCardCategory>
          {lesson?.category.title}
        </VerticalLessonCardCategory>
        <VerticalLessonCardTitle>{lesson?.title}</VerticalLessonCardTitle>
        <VerticalLessonCardAuthor>{lesson?.author}</VerticalLessonCardAuthor>
      </VerticalLessonCardContainer>
    </TouchableOpacity>
  );
};

export default memo(VerticalLessonCard);

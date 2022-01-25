import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Close from 'components/Icons/Close';
import useConnect from '../Home/connect';
import {
  LessonDetailScrollView,
  LessonScreenArticle,
  LessonScreenContainer,
  LessonScreenText,
  LessonScreenTitle,
} from './styles';
import { Props } from './types';

export const LessonDetails: FC<Props> = () => {
  const { handleBack } = useConnect();

  return (
    <LessonDetailScrollView showsVerticalScrollIndicator={false}>
      <LessonScreenContainer>
        <BorderlessButton onPress={handleBack}>
          <Close />
        </BorderlessButton>
        <LessonScreenArticle>Article </LessonScreenArticle>
        <LessonScreenTitle>Title</LessonScreenTitle>
        <LessonScreenText>Author</LessonScreenText>
        <LessonScreenText>Content</LessonScreenText>
      </LessonScreenContainer>
    </LessonDetailScrollView>
  );
};

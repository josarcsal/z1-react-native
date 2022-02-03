import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Close from 'components/Icons/Close';
import useConnect from './connect';
import {
  LessonDetailScrollView,
  LessonScreenArticle,
  LessonScreenContainer,
  LessonScreenImage,
  LessonScreenText,
  LessonScreenTitle,
} from './styles';

export const LessonDetails: FC = () => {
  const { handleBack, title, author, categoryTitle, image, content } =
    useConnect();

  return (
    <LessonDetailScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <LessonScreenContainer>
          <BorderlessButton onPress={handleBack}>
            <Close />
          </BorderlessButton>
          <LessonScreenArticle>{categoryTitle}</LessonScreenArticle>
          <LessonScreenTitle>{title}</LessonScreenTitle>
          <LessonScreenText>{author}</LessonScreenText>
          <LessonScreenImage
            source={{
              uri: image,
            }}
          />
          <LessonScreenText>{content}</LessonScreenText>
        </LessonScreenContainer>
      </SafeAreaView>
    </LessonDetailScrollView>
  );
};

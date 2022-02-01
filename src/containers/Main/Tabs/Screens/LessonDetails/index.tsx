import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Close from 'components/Icons/Close';
import useConnect from '../Home/connect';
import {
  LessonDetailScrollView,
  LessonScreenArticle,
  LessonScreenContainer,
  LessonScreenImage,
  LessonScreenText,
  LessonScreenTitle,
} from './styles';
import { Props } from './types';

export const LessonDetails: FC<Props> = ({ route }) => {
  const { handleBack } = useConnect();
  const { lesson } = route.params;

  return (
    <LessonDetailScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <LessonScreenContainer>
          <BorderlessButton onPress={handleBack}>
            <Close />
          </BorderlessButton>
          <LessonScreenArticle>{lesson?.category.title}</LessonScreenArticle>
          <LessonScreenTitle>{lesson?.title}</LessonScreenTitle>
          <LessonScreenText>{lesson?.author}</LessonScreenText>
          <LessonScreenImage
            source={{
              uri: lesson?.image,
            }}
          />
          <LessonScreenText>{lesson?.content}</LessonScreenText>
        </LessonScreenContainer>
      </SafeAreaView>
    </LessonDetailScrollView>
  );
};

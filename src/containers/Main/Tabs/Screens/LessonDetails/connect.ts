import { useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { LessonDetailsRouteProps } from './types';

const useConnect = () => {
  const { goBack, canGoBack } = useNavigation();
  const {
    params: { lesson },
  } = useRoute<LessonDetailsRouteProps>();

  const handleBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return {
    handleBack,
    title: lesson.title,
    author: lesson.author,
    categoryTitle: lesson.category.title,
    image: lesson.image,
    content: lesson.content,
  };
};

export default useConnect;

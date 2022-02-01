import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { LessonNormalized } from 'models/Lesson';

const useConnect = () => {
  const { navigate, goBack, canGoBack } = useNavigation();

  const handleBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handleNavigateToDetail = useCallback(
    (item: LessonNormalized) => {
      navigate('LessonDetails', { lesson: item });
    },
    [navigate],
  );
  return { handleNavigateToDetail, handleBack };
};

export default useConnect;

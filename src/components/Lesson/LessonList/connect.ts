import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Lesson } from 'models/Lesson';

const useConnect = () => {
  const { navigate, goBack, canGoBack } = useNavigation();

  const handleBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handleNavigateToDetail = useCallback(
    (item: Lesson) => {
      navigate('LessonDetails', { lesson: item });
    },
    [navigate],
  );
  return { handleNavigateToDetail, handleBack };
};

export default useConnect;

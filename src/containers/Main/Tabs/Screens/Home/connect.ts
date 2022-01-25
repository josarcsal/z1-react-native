import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';

const useConnect = () => {
  const { navigate, goBack, canGoBack } = useNavigation();

  const handleBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handleNavigateToDetail = useCallback(() => {
    navigate('LessonDetails');
  }, [navigate]);
  return { handleNavigateToDetail, handleBack };
};

export default useConnect;

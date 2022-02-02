import { useCallback, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import useLessons from 'apollo/hooks/useLessons';

const useConnect = () => {
  const { goBack, canGoBack } = useNavigation();

  const { lessons } = useLessons();

  const categories = lessons?.map((lesson) => {
    return lesson?.category.title;
  });

  const allCategoryList = Array.from(new Set(categories));
  allCategoryList.push('All');
  allCategoryList.sort();

  const [filter, setFilter] = useState<string>('All');

  const selector = filter === 'All';

  var filteredList = useMemo(() => {
    if (selector) return lessons;
    return lessons?.filter((lesson) => filter === lesson?.category.title);
  }, [filter, lessons, selector]);

  const handleBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return {
    handleBack,
    setFilter,
    filter,
    filteredList,
    allCategoryList,
  };
};

export default useConnect;

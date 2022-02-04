import { useMemo } from 'react';
import { useLessonsQuery } from 'apollo/generated/lessons';
import { normalizeLessons } from 'models/Lesson';

const useLessons = () => {
  const { data } = useLessonsQuery();

  const { lessons } = useMemo(() => normalizeLessons(data), [data]);

  return {
    lessons,
  };
};

export default useLessons;

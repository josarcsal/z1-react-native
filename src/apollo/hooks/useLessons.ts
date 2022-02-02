import { useLessonsQuery } from 'apollo/generated/lessons';
import { normalizeLessons } from 'models/Lesson';

const useLessons = () => {
  const { data } = useLessonsQuery();
  const { lessons } = normalizeLessons(data);
  return {
    lessons,
  };
};

export default useLessons;

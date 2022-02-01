import { LessonNormalized } from 'models/Lesson';

export type Props = {
  isFiltered: string;
  lessons: LessonNormalized[];
};

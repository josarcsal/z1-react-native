import { LessonNormalized } from 'models/Lesson';

export type Props = {
  onPress: (item: LessonNormalized) => void;
  lesson: LessonNormalized;
};

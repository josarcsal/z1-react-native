import { Lesson } from 'models/Lesson';

export type Props = {
  onPress: (item: Lesson) => void;
  lesson: Lesson;
};

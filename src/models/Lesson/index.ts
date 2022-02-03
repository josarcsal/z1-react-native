import { Lesson as LessonType } from 'apollo/generated/globalTypes';
import { LessonsQuery } from 'apollo/generated/lessons';

const normalizeLesson = (lesson: LessonType) => ({
  author: lesson.author ?? undefined,
  category: lesson.category,
  content: lesson.content,
  id: lesson.id,
  image: lesson.image,
  title: lesson.title,
});

export const normalizeLessons = (lessons?: LessonsQuery) => ({
  lessons: lessons?.items
    ?.filter((x): x is LessonType => x !== null)
    .map(normalizeLesson) as Lesson[],
});

export type Lesson = ReturnType<typeof normalizeLesson>;
export type Lessons = ReturnType<typeof normalizeLessons>;

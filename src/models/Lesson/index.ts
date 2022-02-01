import { Lesson } from 'apollo/generated/globalTypes';
import { LessonsQuery } from 'apollo/generated/lessons';

const normalizeLesson = (lesson: Lesson) => ({
  author: lesson.author ?? undefined,
  category: lesson.category,
  content: lesson.content,
  id: lesson.id,
  image: lesson.image,
  title: lesson.title,
});

export const normalizeLessons = (lessons?: LessonsQuery) => ({
  lessons: lessons?.items
    ?.filter((x): x is Lesson => x !== null)
    .map(normalizeLesson) as LessonNormalized[],
});

export type LessonNormalized = ReturnType<typeof normalizeLesson>;
export type LessonsNormalized = ReturnType<typeof normalizeLessons>;

import { Category } from 'apollo/generated/globalTypes';

export const normalizeCategory = (category: Category) => ({
  id: category.id,
  title: category.title,
});

export type CategoryNormalized = ReturnType<typeof normalizeCategory>;

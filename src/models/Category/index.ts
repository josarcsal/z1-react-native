import { Category as CategoryType } from 'apollo/generated/globalTypes';

export const normalizeCategory = (category: CategoryType) => ({
  id: category.id,
  title: category.title,
});

export type Category = ReturnType<typeof normalizeCategory>;

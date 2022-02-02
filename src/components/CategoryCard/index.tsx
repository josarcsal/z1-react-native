import React, { FC, useCallback, memo } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  CategoryCardContainer,
  CategoryCardName,
  SelectedCategoryCardContainer,
} from './styles';
import { Props } from './types';

export const CategoryCard: FC<Props> = ({ category, filter, setFilter }) => {
  const handleFilter = useCallback(
    () => setFilter(category),
    [category, setFilter],
  );

  const isFiltered = category === filter;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleFilter}>
      {isFiltered ? (
        <SelectedCategoryCardContainer>
          <CategoryCardName>{category}</CategoryCardName>
        </SelectedCategoryCardContainer>
      ) : (
        <CategoryCardContainer>
          <CategoryCardName>{category}</CategoryCardName>
        </CategoryCardContainer>
      )}
    </TouchableOpacity>
  );
};

export default memo(CategoryCard);

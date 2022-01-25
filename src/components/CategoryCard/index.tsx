import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CategoryCardContainer, CategoryCardName } from './styles';

export const CategoryCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <CategoryCardContainer>
        <CategoryCardName>Cat Name</CategoryCardName>
      </CategoryCardContainer>
    </TouchableOpacity>
  );
};

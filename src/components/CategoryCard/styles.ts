import styled, { css } from 'styled-components/native';

export const CategoryCardContainer = styled.View`
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.purpleCat};
  margin-bottom: 7px;
  border-radius: 10px;
  shadow-color: ${({ theme }) => theme.colors.black};
  elevation: 5;
  height: 37px;
`;

export const SelectedCategoryCardContainer = styled.View`
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.lightPurpleCat};
  margin-bottom: 7px;
  border-radius: 10px;
  shadow-color: ${({ theme }) => theme.colors.black};
  elevation: 5;
  height: 37px;
`;

export const CategoryCardName = styled.Text`
  font-family: 'SofiaProSemiBold';
  font-size: 18px;
  margin-horizontal: 10px;
  margin-vertical: 10px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-vertical: 5px;
    `};
  elevation: 5;
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
`;

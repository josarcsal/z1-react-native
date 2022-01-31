import styled from 'styled-components/native';

export const CategoryCardContainer = styled.View`
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.purpleDark};
  margin-bottom: 7px;
  border-radius: 10px;
  shadow-color: ${({ theme }) => theme.colors.black};
  elevation: 5;
  height: 37px;
`;

export const CategoryCardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-horizontal: 10px;
  margin-vertical: 6px;
  elevation: 5;
  align-self: center;
`;

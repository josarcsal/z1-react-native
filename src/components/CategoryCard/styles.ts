import styled from 'styled-components/native';

export const CategoryCardContainer = styled.View`
  margin-right: 7px;
  background-color: ${({ theme }) => theme.colors.purpleCat};
  margin-bottom: 7px;
  border-radius: 10px;
  shadow-color: ${({ theme }) => theme.colors.black};
  elevation: 5;
  height: 37px;
`;

export const Selected = styled.View`
  margin-right: 10px;
  border-radius: 10px;
  background-color: #b77ac4;
  background-color: ${({ theme }) => theme.colors.lightPurpleCat};
  height: 30px;
  justify-content: center;
`;

export const CategoryCardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-horizontal: 10px;
  margin-vertical: 6px;
  elevation: 5;
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
`;

import styled from 'styled-components/native';

export const CategoryCardContainer = styled.View`
  margin-right: 7px;
  background-color: #593c71;
  margin-bottom: 7px;
  border-radius: 10px;
  shadow-color: #000;
  elevation: 5;
  height: 37px;
`;
//    background-color: #593c71;
export const CategoryCardName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-horizontal: 10px;
  margin-vertical: 6px;
  elevation: 5;
  align-self: center;
  color: ${({ theme }) => theme.colors.white};
`;

import styled from 'styled-components/native';
import { Text as TextBase } from 'components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 65px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const HeaderContainer = styled.View`
  height: 105px;
`;

export const SubContainer = styled.View`
  align-items: center;
`;

export const Text = styled(TextBase)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  margin: 5px 0;
`;

export const Title = styled.Text`
  font-family: 'CooperBT-Medium';
  margin-bottom: 5px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CategoryBar = styled.FlatList`
  margin-top: 12px;
  margin-left: 20px;
  margin-bottom: 12px;
  height: 50px;
`;

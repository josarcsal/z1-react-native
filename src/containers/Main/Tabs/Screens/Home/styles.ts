import styled from 'styled-components/native';
import { Text as TextBase } from 'components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.device.height * 0.1}px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const Text = styled(TextBase)`
  font-size: 20px;
  color: #000;
  margin: 5px 0;
`;

export const Title = styled.Text`
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.white};
`;

export const CategoryBar = styled.FlatList`
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 10px;
  height: 50px;
`;

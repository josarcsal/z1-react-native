import styled from 'styled-components/native';

export const LessonDetailScrollView = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const LessonScreenContainer = styled.View`
  flex: 1;
  align-content: center;
  margin-horizontal: 20px;
  margin-top: 25px;
  background-color: ${({ theme }) => theme.colors.grape};
`;

export const LessonScreenArticle = styled.Text`
  font-size: 13px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellowArticle};
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const LessonScreenTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-horizontal: 10px;
  margin-vertical: 7px;
`;

export const LessonScreenText = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  margin-horizontal: 10px;
  margin-vertical: 7px;
`;

export const LessonScreenImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-vertical: 7px;
`;

import styled, { css } from 'styled-components/native';

export const VerticalLessonCardContainer = styled.View`
  margin-horizontal: 5px;
  width: ${({ theme }) => theme.device.width * 0.435}px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lessonPurple};
  shadow-color: ${({ theme }) => theme.colors.white};
  elevation: 5;
  height: 300px;
`;

export const VerticalLessonCardImage = styled.Image`
  width: 100%;
  height: 38%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const VerticalLessonCardCategory = styled.Text`
  font-family: 'SofiaProMedium';
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-bottom: 5px;
    `};
  color: ${({ theme }) => theme.colors.lessonYellow};
  font-size: 15px;
  text-transform: uppercase;
`;

export const VerticalLessonCardTitle = styled.Text`
  font-family: 'SofiaProSemiBold';
  margin-horizontal: 10px;
  margin-bottom: 10px;
  ${({ theme }) =>
    theme.device.isAndroid &&
    css`
      margin-bottom: 5px;
    `};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`;

export const VerticalLessonCardAuthor = styled.Text`
  font-family: 'SofiaProLight';
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

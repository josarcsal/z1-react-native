import styled from 'styled-components/native';

export const VerticalLessonCardContainer = styled.View`
  margin-horizontal: 5px;
  width: ${({ theme }) => theme.device.width * 0.45}px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #60306f;
  shadow-color: #000;
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
  margin-horizontal: 10px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fddb6f;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const VerticalLessonCardTitle = styled.Text`
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const VerticalLessonCardAuthor = styled.Text`
  margin-horizontal: 10px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 13px;
`;

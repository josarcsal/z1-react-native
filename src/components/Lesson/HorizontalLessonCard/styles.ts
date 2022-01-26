import styled from 'styled-components/native';

export const HorizontalLessonCardContainer = styled.View`
  width: ${({ theme }) => theme.device.width * 0.9}px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #60306f;
  shadow-color: #000;
  height: 125px;
  align-content: center;
`;

export const HorizontalLessonCardImage = styled.Image`
  width: 105px;
  height: 105px;
  margin-vertical: 10px;
  margin-horizontal: 10px;
  border-radius: 10px;
`;

export const HorizontalLessonCardCategory = styled.Text`
  position: absolute;
  left: 115px;
  margin-horizontal: 12px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #fddb6f;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HorizontalLessonCardTitle = styled.Text`
  position: absolute;
  top: 35px;
  left: 115px;
  width: 220px;
  margin-horizontal: 12px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
`;

export const HorizontalLessonCardAuthor = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 115px;
  margin-horizontal: 12px;
  margin-bottom: 5px;
  color: #ffffff;
  font-size: 13px;
`;

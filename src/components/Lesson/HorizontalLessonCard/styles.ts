import styled from 'styled-components/native';

export const HorizontalLessonCardContainer = styled.View`
  width: ${({ theme }) => theme.device.width * 0.95};
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purpleCard};
  shadow-color: ${({ theme }) => theme.colors.black};
  height: 125px;
  align-content: center;
`;

export const HorizontalLessonCardImage = styled.Image`
  width: 30%;
  height: 107px;
  margin-vertical: 8px;
  margin-horizontal: 8px;
  border-radius: 10px;
`;

export const HorizontalLessonCardCategory = styled.Text`
  position: absolute;
  left: 115px;
  margin-horizontal: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.yellowArticle};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const HorizontalLessonCardTitle = styled.Text`
  position: absolute;
  top: 35px;
  left: 115px;
  width: 220px;
  margin-horizontal: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  font-weight: bold;
`;

export const HorizontalLessonCardAuthor = styled.Text`
  position: absolute;
  bottom: 5px;
  left: 115px;
  margin-horizontal: 15px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
`;

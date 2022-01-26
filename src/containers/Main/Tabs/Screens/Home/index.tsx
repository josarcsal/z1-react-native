import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryCard } from 'components/CategoryCard';
import { LessonList } from 'components/Lesson/LessonList';
import {
  CategoryBar,
  Container,
  HeaderContainer,
  SubContainer,
  Title,
} from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const categorySelector = 'All'.localeCompare('All');

  return (
    <Container>
      <SafeAreaView>
        <SubContainer>
          <HeaderContainer>
            <Title>Learn</Title>
            <CategoryBar
              data={['cat1', 'cat2', '3', '4', '5', '6']}
              showsHorizontalScrollIndicator={false}
              renderItem={() => <CategoryCard />}
              horizontal={true}
            />
          </HeaderContainer>
          <LessonList categoryFlag={categorySelector} />
        </SubContainer>
      </SafeAreaView>
    </Container>
  );
};

export default Home;

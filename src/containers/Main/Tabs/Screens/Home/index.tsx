import React, { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { CategoryCard } from 'components/CategoryCard';
//import { HorizontalLessonCard } from 'components/Lesson/HorizontalLessonCard';
import { VerticalLessonCard } from 'components/Lesson/VerticalLessonCard';
import useConnect from './connect';
import { CategoryBar, Container, Title } from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { handleNavigateToDetail } = useConnect();

  return (
    <Container>
      <Title>Learn</Title>
      <CategoryBar
        data={['cat1', 'cat2']}
        showsHorizontalScrollIndicator={false}
        renderItem={() => <CategoryCard />}
        horizontal={true}
      />
      <FlatList
        data={['lesson1', 'lesso2', 'lesson3', '4', '5', '6']}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={() => (
          <TouchableOpacity onPress={handleNavigateToDetail}>
            <VerticalLessonCard />
          </TouchableOpacity>

          //<Button title="lesson" onPress={handleNavigateToDetail} />
        )}
      />
    </Container>
  );
};

export default Home;

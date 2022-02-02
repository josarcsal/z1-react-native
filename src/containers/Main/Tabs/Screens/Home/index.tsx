import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryCard } from 'components/CategoryCard';
import { LessonList } from 'components/Lesson/LessonList';
import useConnect from './connect';
import {
  CategoryBar,
  Container,
  HeaderContainer,
  SubContainer,
  Title,
} from './styles';
import { Props } from './types';

const Home: FC<Props> = () => {
  const { allCategoryList, filteredList, filter, setFilter } = useConnect();

  return (
    <Container>
      <SafeAreaView>
        <SubContainer>
          <HeaderContainer>
            <Title>Learn</Title>
            <CategoryBar
              data={allCategoryList}
              showsHorizontalScrollIndicator={false}
              renderItem={(category) => (
                <CategoryCard
                  category={category.item}
                  filter={filter}
                  setFilter={setFilter}
                />
              )}
              horizontal={true}
            />
          </HeaderContainer>
          <LessonList filter={filter} lessons={filteredList} />
        </SubContainer>
      </SafeAreaView>
    </Container>
  );
};

export default Home;

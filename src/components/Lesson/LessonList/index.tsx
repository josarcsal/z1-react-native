import React, { FC, memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Lesson } from 'models/Lesson';
import { HorizontalLessonCard } from '../HorizontalLessonCard';
import { VerticalLessonCard } from '../VerticalLessonCard';
import useConnect from './connect';
import { HorizontalView, VerticalView } from './styles';
import { Props } from './types';

const handleKeyExtractor = (item: Lesson) => item.id;

export const LessonList: FC<Props> = ({ filter, lessons }) => {
  const { handleNavigateToDetail } = useConnect();
  const categoryFlag = filter === 'All';
  return (
    <>
      {categoryFlag ? (
        <VerticalView>
          <FlatList
            keyExtractor={handleKeyExtractor}
            data={lessons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={(lesson) => (
              <VerticalLessonCard
                lesson={lesson.item}
                onPress={handleNavigateToDetail}
              />
            )}
          />
        </VerticalView>
      ) : (
        <HorizontalView>
          <FlatList
            keyExtractor={handleKeyExtractor}
            data={lessons}
            showsVerticalScrollIndicator={false}
            renderItem={(lesson) => (
              <HorizontalLessonCard
                lesson={lesson.item}
                onPress={handleNavigateToDetail}
              />
            )}
          />
        </HorizontalView>
      )}
    </>
  );
};

export default memo(LessonList);

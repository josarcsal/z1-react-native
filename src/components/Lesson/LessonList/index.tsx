import React, { FC, memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { HorizontalLessonCard } from '../HorizontalLessonCard';
import { VerticalLessonCard } from '../VerticalLessonCard';
import useConnect from './connect';
import { HorizontalView, VerticalView } from './styles';
import { Props } from './types';

export const LessonList: FC<Props> = ({ isFiltered, lessons }) => {
  const { handleNavigateToDetail } = useConnect();
  const categoryFlag = 'All'.localeCompare(isFiltered) === 0;
  return (
    <>
      {categoryFlag ? (
        <VerticalView>
          <FlatList
            key={'2colums'}
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
            key={'1colum'}
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

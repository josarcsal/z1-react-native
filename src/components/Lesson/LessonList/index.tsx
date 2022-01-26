import React, { FC } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { HorizontalLessonCard } from '../HorizontalLessonCard';
import { VerticalLessonCard } from '../VerticalLessonCard';
import useConnect from './connect';
import { HorizontalView, VerticalView } from './styles';
import { Props } from './types';

export const LessonList: FC<Props> = ({ categoryFlag }) => {
  const { handleNavigateToDetail } = useConnect();
  return (
    <>
      {categoryFlag ? (
        <HorizontalView>
          <FlatList
            key={'1colum'}
            data={['lesson1', 'lesso2', 'lesson3', '4', '5', '6']}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
              <TouchableOpacity onPress={handleNavigateToDetail}>
                <HorizontalLessonCard />
              </TouchableOpacity>
            )}
          />
        </HorizontalView>
      ) : (
        <VerticalView>
          <FlatList
            key={'2colums'}
            data={['lesson1', 'lesso2', 'lesson3', '4', '5', '6']}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
              <TouchableOpacity onPress={handleNavigateToDetail}>
                <VerticalLessonCard />
              </TouchableOpacity>
            )}
          />
        </VerticalView>
      )}
    </>
  );
};

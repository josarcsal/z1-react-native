import React, { FC } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Close from 'components/Icons/Close';
import useConnect from '../Home/connect';
import {
  LessonDetailScrollView,
  LessonScreenArticle,
  LessonScreenContainer,
  LessonScreenImage,
  LessonScreenText,
  LessonScreenTitle,
} from './styles';
import { Props } from './types';

export const LessonDetails: FC<Props> = () => {
  const { handleBack } = useConnect();

  return (
    <LessonDetailScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <LessonScreenContainer>
          <BorderlessButton onPress={handleBack}>
            <Close />
          </BorderlessButton>
          <LessonScreenArticle>Article </LessonScreenArticle>
          <LessonScreenTitle>Title</LessonScreenTitle>
          <LessonScreenText>Author</LessonScreenText>
          <LessonScreenImage
            source={{
              uri: 'https://placeimg.com/640/360/animals',
            }}
          />
          <LessonScreenText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
            ipsum, hendrerit a sem euismod, aliquet mollis magna. Duis quis
            eleifend urna. Proin rhoncus tortor odio, et posuere velit fermentum
            at. Curabitur a bibendum ex, eget dignissim est. Donec dignissim
            accumsan urna sit amet tristique. Suspendisse eu sollicitudin lorem,
            id sagittis libero. Integer id ipsum pharetra, commodo magna in,
            placerat dolor. Sed tempus ex non eros maximus feugiat. Curabitur
            tempor libero eget orci blandit ornare. Phasellus sagittis vehicula
            dolor vel congue. Pellentesque mollis massa tempus magna blandit
            fermentum. Vestibulum sagittis lorem vitae nulla maximus ornare.
            Nulla rhoncus lacinia metus eget rhoncus. Sed vehicula, leo vel
            vestibulum bibendum, nisi metus elementum metus, sit amet consequat
            magna arcu sit amet sapien. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla ultrices molestie diam, et venenatis nunc
            accumsan sed. Sed eleifend leo vel diam dignissim tempor. Duis ut
            eleifend odio. Sed imperdiet erat vitae elit fermentum vulputate.
            Sed tincidunt felis ac leo consectetur congue. Donec elementum risus
            molestie, commodo justo vel, mattis eros. Phasellus sit amet lectus
            quis purus consequat feugiat. Nunc id urna vel urna finibus
            sagittis. Donec maximus ante non diam scelerisque, eget mollis mi
            sollicitudin. Duis mattis porttitor mi sit amet egestas. Donec
            tristique ut massa id aliquet. Proin laoreet nibh vitae ex
            tristique, eu placerat sem semper. Cras et pulvinar ex, non
            consectetur sem. Phasellus lobortis dolor ac lectus varius, sit amet
            iaculis massa posuere. Maecenas vitae imperdiet magna. Proin finibus
            dolor nec accumsan consectetur. Fusce a erat risus. Morbi pharetra
            mollis purus ut porttitor. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Nullam pharetra odio
            eu dolor molestie, at venenatis eros volutpat. Nulla venenatis
            sodales neque et fermentum. Curabitur eleifend at elit tristique
            consectetur. Fusce facilisis lacus ut nulla aliquet, non placerat
            dui suscipit. Praesent cursus dolor luctus, malesuada sapien vitae,
            volutpat sapien. Pellentesque placerat a ipsum eget eleifend. In eu
            ullamcorper est, non tristique lacus. Quisque hendrerit turpis non
            sem varius sollicitudin. Quisque sed finibus tellus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Proin et massa eget est
            ultrices facilisis non in nunc. Curabitur non porttitor odio, ut
            rutrum nibh. Donec a augue metus. Vestibulum eu libero iaculis,
            rhoncus quam eu, scelerisque ipsum. Maecenas efficitur tempus lacus,
            non sollicitudin sapien. In quis tristique mi. Sed et consectetur
            purus. Sed eu enim metus. Nulla non lorem blandit leo dapibus
            fermentum ut ut mauris. Curabitur rutrum velit ut scelerisque
            sagittis. Vestibulum sed porttitor dui. Integer et consectetur ex,
            ut convallis urna. Sed vitae leo a justo commodo maximus. Donec
            convallis enim nisi, sed dignissim augue euismod eget. Mauris neque
            urna, finibus sit amet condimentum a, elementum eu sapien.
            Pellentesque tellus mi, ultrices eget vulputate in, sodales ac
            neque. Vestibulum cursus lacus eros, in porttitor tortor lacinia a.
            Mauris egestas lorem sed eros scelerisque sagittis. Duis massa enim,
            auctor sed erat ac, porta lacinia justo. Quisque sed libero
            tincidunt, placerat odio vitae, convallis est. Integer dictum
            posuere arcu nec efficitur. Integer feugiat pharetra justo vitae
            varius. Donec non massa et neque venenatis viverra sit amet at enim.
            Proin tempor velit id dolor varius tempor. Maecenas elementum, ex in
            pellentesque consectetur, ipsum orci blandit nibh, nec accumsan arcu
            velit sit amet odio. Etiam convallis pellentesque lacinia. Nam et
            nisi nulla. Pellentesque fermentum ac ante ut gravida. Pellentesque
            luctus velit at odio efficitur fringilla ac quis tellus. Aenean
            auctor laoreet velit tempus rutrum. Integer orci erat, egestas ac
            eleifend vitae, posuere vel ipsum. Curabitur vitae mauris iaculis,
            consectetur leo id, vestibulum nisl. Aenean dictum consectetur
            consectetur. Sed ac arcu in quam commodo tempor eu vitae purus.
            Praesent non justo orci. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Morbi accumsan, justo sed
            eleifend aliquam, ex nunc fringilla sem, dapibus lacinia diam nulla
            sit amet massa. Morbi varius ligula eget mi interdum, et lobortis
            mauris convallis. Phasellus malesuada eleifend molestie. Donec at
            mollis sem. Integer ornare dictum neque accumsan dignissim.
          </LessonScreenText>
        </LessonScreenContainer>
      </SafeAreaView>
    </LessonDetailScrollView>
  );
};

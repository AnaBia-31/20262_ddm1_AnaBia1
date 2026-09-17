import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ScrollView
      headerBackgroundColor={{ light: '#d9a1dc', dark: '#471d41' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#471d41"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Descubra sobre mim
        </ThemedText>
      </ThemedView>
      <ThemedText>Clique nas fofocas abaixo e descubra o que aconteceu. </ThemedText>
      <Collapsible title="Minha irmã quase congelou meu coração!">
        <ThemedText>
          <ThemedText type="defaultSemiBold">Ela congelou minha cabeça quando éramos crianças, um troll mágico me fez esquecer que ela tinha poderes, crescemos isoladas e quando descobri a verdade, ela ficou assustada e congelou meu coração sem querer. Mas o nosso amor foi mais forte e me salvou.</ThemedText> 
        </ThemedText>
      </Collapsible>
      <Collapsible title="Conheci meu noivo quando fui atrás da minha irmã assustada.">
        <ThemedText>
          <ThemedText type="defaultSemiBold">Eu estava noiva de outra pessoa na época - que quase me matou depois, inclusive - mas mesmo assim ele me ajudou até o fim e bom, estamos juntos desde então.</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

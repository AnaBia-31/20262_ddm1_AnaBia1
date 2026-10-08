import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView
      headerBackgroundColor={{
        light: '#d9a1dc',
        dark: '#471d41',
      }}
      headerImage={
        <Image
          source={require('@/assets/images/Anna-PNG-Image.png')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Olá! Eu sou a Anna de Arendelle.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Tenho 21 anos
        </ThemedText>

        <ThemedText>
          e sou a rainha do meu povo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">
              Tenho uma irmã com poderes de gelo.
            </ThemedText>
          </Link.Trigger>

          <Link.Preview />

          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert('Action pressed')}
            />

            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />

            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
          Um boneco de neve falante e um noivo muito gato.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          Vou me casar em breve.
        </ThemedText>

        <ThemedText>
          <ThemedText type="defaultSemiBold">
            E uma vilã vai invadir minha festa.
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  headerImage: {
    width: '100%',
    height: '100%',
  },
});

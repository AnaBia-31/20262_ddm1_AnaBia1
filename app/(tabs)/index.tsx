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
        light: '#464546',
        dark: '#471d41',
      }}
      headerImage={
        <Image
          source={require('@/assets/images/capitaoxtony.webp')}
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Guerra Civil: quem estava certo?
        </ThemedText>
      </ThemedView>

      <ThemedView>
        <ThemedText style={{ fontSize: 20 }}>
          Hoje vamos julgar os prós e contras da versão do Homem de Ferro e do Capitão América sobre a situação da Guerra Civil.
        </ThemedText>
      </ThemedView>

<Image
          source={require('@/assets/images/images.jpg')}
        />

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

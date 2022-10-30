import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';

import RestaurantItem from './src/components/RestaurantItem';
import restaurants from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant Item */}
      {/* <RestaurantItem restaurant={restaurants[0]} /> */}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingVertical: 30 // temporary solution
  }
});

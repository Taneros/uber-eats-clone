import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import DishDetailsScreen from './src/screens/DishDetailScreen'
import HomeScreen from './src/screens/HomeScreen'
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      <DishDetailsScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
  },
})

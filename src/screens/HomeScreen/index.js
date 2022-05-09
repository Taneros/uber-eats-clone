import { StyleSheet, View, FlatList } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'
import RestaurantItem from '../../components/RestaurantItem'
restaurants

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  )
}

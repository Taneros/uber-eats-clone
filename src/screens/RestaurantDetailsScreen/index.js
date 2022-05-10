import { StyleSheet, View, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { restaurants } from '../../../assets/data/restaurants'
import DishListItem from '../../components/DishListItem'
import Header from './Header'
import { useRoute, useNavigation } from '@react-navigation/native'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const id = route.params?.id

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={<Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name.slice(6)}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  )
}
export default RestaurantDetailsScreen
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
})

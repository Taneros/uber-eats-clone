import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { restaurants } from '../../../assets/data/restaurants'
import DishListItem from '../../components/DishListItem'
const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          Fee: ${restaurant.deliveryFee} Delivery Time:
          {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min
        </Text>
      </View>
      <DishListItem dish={restaurant.dishes[0]} />
      <DishListItem dish={restaurant.dishes[2]} />
    </View>
  )
}
export default RestaurantDetailsScreen
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
  },
})

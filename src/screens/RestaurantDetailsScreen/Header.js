import { StyleSheet, Text, View, Image } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'

const Header = ({ restaurant }) => {
  return (
    <View>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          Fee: ${restaurant.deliveryFee} Delivery Time:
          {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}
export default Header
const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  container: {
    margin: 10,
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
  menuTitle: {
    marginTop: 15,
    fontSize: 20,
    letterSpacing: 0.7,
    fontWeight: '700',
  },
})

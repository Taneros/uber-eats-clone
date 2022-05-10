import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Restaurant', { id: restaurant.id })
  }

  return (
    <Pressable style={styles.restaurauntContainer} onPress={onPress}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.fee}>
            Fee: ${restaurant.deliveryFee} Delivery Time:
            {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text>Rating: </Text>
          <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
export default RestaurantItem

const styles = StyleSheet.create({
  restaurauntContainer: {
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 5,
  },
  fee: {
    color: 'grey',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rating: {
    height: 30,
    width: 30,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
})

import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import orders from '../../../assets/data/orders.json'
import { restaurants } from '../../../assets/data/restaurants'
import BasketDishItem from '../../components/BasketDishItem'
import DishListItem from '../../components/DishListItem'
import OrderListItem from '../../components/OrderListItem'

const order = orders[0]

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: order.Restaurant.image }} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} - 2 days ago</Text>
          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  )
}

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  )
}
export default OrderDetails

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

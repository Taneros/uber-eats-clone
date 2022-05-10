import { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { restaurants } from '../../../assets/data/restaurants'
import BasketDishItem from '../../components/BasketDishItem'

const restaurant = restaurants[0]

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.yourItems}>Your items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.buttonAdd}>
        <Text style={styles.buttonAddText}>Create order</Text>
      </View>
    </View>
  )
}
export default Basket
const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 30, //temp fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 10,
  },
  yourItems: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },

  buttonAdd: {
    backgroundColor: 'black',
    marginTop: 'auto',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})

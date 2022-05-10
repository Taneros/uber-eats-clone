import { StyleSheet, Text, View, Image } from 'react-native'
const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>{dish.price}</Text>
      </View>
      <Image source={{ uri: dish.image }} style={styles.image} />
    </View>
  )
}
export default DishListItem

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingBottom: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  name: { fontSize: 17, fontWeight: '600' },
  description: { color: 'grey', marginVertical: 5 },
  price: { fontSize: 16 },
  image: {
    height: 100,
    aspectRatio: 1,
  },
})

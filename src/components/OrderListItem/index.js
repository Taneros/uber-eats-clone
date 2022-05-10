import { StyleSheet, Image, View, Text } from 'react-native'

const OrderListItem = ({ order }) => {
  return (
    <View style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{
          width: 100,
          height: 100,
          marginRight: 10,
        }}
      />
      <View>
        <Text style={{ fontWeight: '600', fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text>3 items $38.45</Text>
        <Text>2 days ago; {order.status}</Text>
      </View>
    </View>
  )
}
export default OrderListItem
const styles = StyleSheet.create({})

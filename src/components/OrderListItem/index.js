import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Image, View, Text, Pressable } from 'react-native'

const OrderListItem = ({ order }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate('Order', { id: order.id })}
      style={{ flexDirection: 'row', margin: 10, alignItems: 'center' }}
    >
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
    </Pressable>
  )
}
export default OrderListItem
const styles = StyleSheet.create({})

import { StyleSheet, View } from 'react-native'
import Basket from './src/screens/Basket'
import DishDetailsScreen from './src/screens/DishDetailScreen'
import HomeScreen from './src/screens/HomeScreen'
import OrderDetails from './src/screens/OrderDetails'
import OrdersScreen from './src/screens/OrdersScreen'
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen'

import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigator'

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <Basket /> */}
      {/* <OrdersScreen /> */}
      {/* <Basket /> */}
      {/* <OrderDetails /> */}
      {/* </View> */}
      <RootNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // padding: 10,
  // },
})

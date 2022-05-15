import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigator'

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

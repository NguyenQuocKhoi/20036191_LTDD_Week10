import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/stores";
import Screen1Redux from "./screens/Screen1Redux";
import Screen2Redux from "./screens/Screen2Redux";
// import Screen1Api from "./screens/Screen1Api";
// import Screen2Api from "./screens/Screen2Api";
import { Provider } from "react-redux";
const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1Redux" component={Screen1Redux}/>
          <Stack.Screen name="Screen2Redux" component={Screen2Redux}/>
        </Stack.Navigator>
      </NavigationContainer>
     </Provider>
  )
}
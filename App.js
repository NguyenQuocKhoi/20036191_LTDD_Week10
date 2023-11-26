import Screen1Redux from "./screens/Screen1Redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./redux/stores";
import Screen1Api from "./screens/Screen1Api";
import Screen2Api from "./screens/Screen2Api";
const Stack = createNativeStackNavigator();
import Screen2Redux from "./screens/Screen2Redux";
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Screen1Redux" component={Screen1Redux}></Stack.Screen>
        <Stack.Screen name="Screen2Redux" component={Screen2Redux}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Screen1Api"
    //       component={Screen1Api}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name="Screen2Api"
    //       component={Screen2Api}
    //     ></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

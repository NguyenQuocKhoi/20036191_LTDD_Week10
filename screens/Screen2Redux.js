import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function Screen2Redux({ navigation, route }) {
  const { item } = route.params;
  const dispatch = useDispatch();

  const [task, setTask] = useState(item.note);
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 35,
          width: 250,
          alignSelf: "center",
          marginTop: 50,
          borderWidth: 1,
        }}
      >
        <TextInput
          style={{ height: 35, width: 250 }}
         
          value={task}
          onChangeText={setTask}
        ></TextInput>
      </View>
      <TouchableOpacity
        onPress={()=>{
          dispatch({
            type:'UPDATE',
            payload:item.id, note:task,
          });
          navigation.navigate('Screen1Redux')
        }}
      >
        <View
          style={{
            height: 35,
            width: 250,
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
            backgroundColor: "pink",
            justifyContent: "center",
          }}
        >
          Update
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

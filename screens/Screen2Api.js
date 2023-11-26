import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
export default function Screen2Api({ navigation, route }) {
  const { item } = route.params;
  const [note, setNote] = useState(item.note);
  const [name, setName] = useState(item.name);

  const update1 = async (id) => {
    try {
      fetch(`https://655eef9c879575426b44305d.mockapi.io/note/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, note: note }),
      });
      //   setTask("");
      navigation.navigate("Screen1Api");
    } catch (error) {
      console.error("Error updating task:", error);
      // Handle error if needed
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: "50px",
          alignSelf: "center",
          width: 250,
          height: 35,
          borderWidth: 1,
        }}
      >
        <TextInput
          style={{ height: 35, width: 250 }}
          onChangeText={setName}
          value={name}
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: "20px",
          alignSelf: "center",
          width: 250,
          height: 35,
          borderWidth: 1,
        }}
      >
        <TextInput
          style={{ height: 35, width: 250 }}
          onChangeText={setNote}
          value={note}
        ></TextInput>
      </View>
      <Pressable
        onPress={() => {
          update1(item.id);
        }}
      >
        <View
          style={{
            marginTop: 20,
            height: 35,
            width: 250,
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "pink",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>Update</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

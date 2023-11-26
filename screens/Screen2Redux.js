import { StyleSheet, Text, View, TextInput, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Screen2({navigation, route}) {
  const {item} = route.params;
  const [note, setNote] = useState(item.note);
  const [name, setName] = useState(item.name);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{marginTop:'50px', alignSelf:'center', width:250, height:35, borderWidth:1}}>
        <TextInput style={{height:35, width:250}} onChangeText={setName} value={name}></TextInput>
      </View>
      <View style={{marginTop:'20px', alignSelf:'center', width:250, height:35, borderWidth:1}}>
        <TextInput style={{height:35, width:250}} onChangeText={setNote} value={note}></TextInput>
      </View>
      <Pressable onPress={()=>{
        dispatch({
            type:'UPDATE',
            payload:{id:item.id, name:name, note:note}
        });
        navigation.navigate('Screen1Redux');
      }}>
      <View style={{marginTop:20, height:35, width:250, borderRadius:1, alignItems:'center', justifyContent:'center', backgroundColor:"pink", alignSelf:'center'}}>
          <Text style={{textAlign:'center'}}>Update</Text>
      </View>
      </Pressable>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

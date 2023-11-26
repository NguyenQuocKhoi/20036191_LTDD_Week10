import { StyleSheet, Text, View, TextInput, Pressable, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Screen1({navigation}) {
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state)=>state.notes)
  const [data, setData] = useState([]);
  const getTask = async () => {
    await fetch("https://655eef9c879575426b44305d.mockapi.io/note")
      .then((respone) => respone.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    getTask();
  }, [getTask]);

  return (
    <View style={styles.container}>
      <View style={{marginTop:'50px', alignSelf:'center', width:250, height:35, borderWidth:1}}>
        <TextInput style={{height:35, width:250}} onChangeText={setName}></TextInput>
      </View>
      <View style={{marginTop:'20px', alignSelf:'center', width:250, height:35, borderWidth:1}}>
        <TextInput style={{height:35, width:250}} onChangeText={setNote}></TextInput>
      </View>
      <Pressable onPress={()=>{
        dispatch({
          type:'ADD',
          payload:{id:notes.lenght+1, name:name, note:note}
        });
        setName("");
        setNote("");
      }}>
      <View style={{marginTop:20, height:35, width:250, borderRadius:1, alignItems:'center', justifyContent:'center', backgroundColor:"pink", alignSelf:'center'}}>
          <Text style={{textAlign:'center'}}>Insert</Text>
      </View>
      </Pressable>
      
      <FlatList
      data={data.concat(notes)}
      renderItem={({item})=>{
        return(
          <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:20, marginTop:10}}>
            <Text>{item.name}</Text>
            <Text>{item.note}</Text>
            <View style={{flexDirection:'row',}}>
              <Pressable style={{marginRight:20}} onPress={()=>{
                navigation.navigate('Screen2Redux', {item:item})
              }}>Edit</Pressable>
              <TouchableOpacity style={{marginRight:20}} onPress={()=>{
                dispatch({
                  type:'DELETE',
                  payload:item.id
                })
              }}>Delete</TouchableOpacity>
            </View>
          </View>
        );
      }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

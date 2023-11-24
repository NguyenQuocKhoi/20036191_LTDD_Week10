import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Screen1Redux({navigation}) {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector((state)=>state.tasks)
    const [task1, setTask1] = useState([]);
    useEffect(() => {
      fetch("https://655eef9c879575426b44305d.mockapi.io/note")
        .then((resp) => resp.json())
        .then((json) => setTask1(json));
    }, []);


  return (
    <View style={styles.container}>
      <View style={{height:35, width:250, alignSelf:'center', marginTop:50, borderWidth:1}}>
        <TextInput style={{height: 35, width:250}}
        
       onChangeText={setTask} ></TextInput>
      </View>
      <TouchableOpacity
      onPress={()=>{
        dispatch({
          type:"ADD",
          payload:{
            id: task1.length+1,
            note:task
          }
        })
      }}
      >
      <View style={{height:35, width:250, alignItems:'center', alignSelf:'center', marginTop:20, backgroundColor:'pink', justifyContent:'center'}}>
            ADD
      </View>
      </TouchableOpacity>
      <FlatList
      data={task1.concat(tasks)}
      renderItem={({item})=>{
        return(
            <View style={{  flexDirection:'row', justifyContent:'space-between', marginLeft:"50px", marginTop:'10px'}}>
                <Text>{item.note}</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginRight:"20px"}}
                        onPress={()=>{
                          navigation.navigate('Screen2Redux', {item:item})
                        }}
                    >
                        Edit
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:"20px"}}
                    onPress={()=>{
                      dispatch({
                        type:'DELETE',
                        payload: item.id
                      })
                    }}  >
                        Delete
                    </TouchableOpacity>
                </View>
            </View>
        );
      }}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

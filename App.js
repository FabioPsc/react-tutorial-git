import { StatusBar } from 'expo-status-bar';
import React, {} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  state={
    value:'',
    todoList: [],
  }
  onChangeTextHandler=(text)=>{
    this.setState({value:text})
  }
  
  addTodoHandler=()=>{
    if(this.state.value.trim()===""){
      alert('inserisci i Dati')
    }
    this.setState(prevState=>{
      return {
        todoList: prevState.todoList.concat({value: prevState.value, uid: Math.random().toString()})
      }
    })
    this.setState({
      value: ""
    })
  }
  render() {

    /* console.warn('vediamo se spunta qui') */
    return (
      <View>
      {/* <Text>Prima Applicazione</Text>
        <Text>Applicazione Todo</Text>
      <Text>Fabio Piscini</Text> */}
      <StatusBar style="auto" />
      
      <View style={styles.InputContainer}>
      <TextInput value={this.state.value} onChangeText={this.onChangeTextHandler} placeholder="Inserisci i dati" style={styles.Input}/>
      <Button title="invia" onPress={this.addTodoHandler}/>
      </View>
      <View>
      {/* OUTPUT */}
        <FlatList 
        keyExtractor={item=>item.uid}
        data={this.state.todoList} 
        renderItem={item=>(
          <View style={styles.Output}><Text style={styles.Todo}>{item.item.value}</Text></View>
        )} />
      </View>
      
      </View>
      );
    }
    
  }  
  
  const styles = StyleSheet.create({
    Input: {
      width:'80%',
      borderWidth: 1,
      borderRadius:5,
      paddingVertical: 5,
      paddingLeft:5
    },
    InputContainer: { 
      padding:50, 
      marginTop:20, 
      flexDirection: 'row', 
      alignItems: 'center'
    },
    Output: {
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      marginVertical: 5
    },
    Todo: {
      color:'blue'
    }
  });
  
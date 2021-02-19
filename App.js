import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Keyboard, 
  TouchableWithoutFeedback, 
  TouchableOpacity 
} from 'react-native';

export default function App() {

  const [count, setCount] = useState(1000);

  const reset = () => {
    setCount(1000);
  };

  const add = () => {
    setCount(count + parseInt(value));
  };

  const subtract = () => {
    setCount(count - value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
      Keyboard.dismiss();
      }}>
      <View style={styles.container} >
        <View style={styles.rectangle}>
          <Text style={styles.text}>{count}</Text>          
        </View>
        <View>
          <TextInput 
            keyboardType="number-pad"
            placeholder="Enter number" 
            style={styles.input} 
            onChangeText={text =>  value = text} 
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={add} >
            <Text style={[styles.text, {fontSize: 18 ,color: "#fff"}]}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={subtract} >
            <Text style={[styles.text, {fontSize: 18 ,color: "#fff"}]}>Subtract</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.button, {marginLeft: 160, marginTop: 20}]} onPress={reset} >
          <Text style={[styles.text, {fontSize: 18 ,color: "#fff"}]}>Reset</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  rectangle:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
    backgroundColor: "#CACACA",
    borderRadius: 7,  
    marginTop: 75,
    marginLeft: 85,
  },
  text:{
    fontSize: 28,
    fontWeight: "700",
  },
  input:{
    margin: 40,
    paddingHorizontal: 10,
    marginHorizontal: 120,
    color: '#1D2029',
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#CACACA",
    borderRadius: 5

  },
  buttonContainer:{
    flexDirection: 'row', 
    justifyContent:"space-around"
  },
  button:{
    width:90,
    height: 50,
    backgroundColor: "#24A6D9",
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

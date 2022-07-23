import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";

export const InputData = (props) => {
  const [input, setInput] = useState("");
  function inputHandler(enteredText) {
    setInput(enteredText);
  }

  function addInputHandler() {
    props.onInputAdd(input);
    setInput("");
  }
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputArea}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Add You Goal!!"
          onChangeText={inputHandler}
          value={input}
        />
        <View style={styles.buttons}>
          <View style={styles.buttonBoth}>
            <Button title="Enter" onPress={addInputHandler} color="#5e0acc"/>
          </View>
          <View style={styles.buttonBoth}>
            <Button title="Cancel" onPress={props.onCancelBtn} color="#dc143c"/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#191970'
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#f5fffa",
    color: "white",
    borderRadius: 5,
    padding: 8,
    width: "100%",
    color: "black"
  },

  buttons: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonBoth: {
    width: 100,
    marginHorizontal: 8,
  },

  image:{
    width: 100,
    height: 100,
    margin: 20,
  
   
  }
});

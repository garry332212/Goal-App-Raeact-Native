import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const OutputData = (props) => {
  return (
    <View style={styles.listDisplay}>
    <Pressable 
    android_ripple={{color: "#fff"}}
    style={({pressed}) =>pressed && styles.pressedItem}
    onPress={props.deleteData.bind(this, props.id)}>
     
        <Text style={{ color: "#f0f8ff", padding: 10, }}>{props.data}</Text>
        </Pressable>
      </View>
    
  );
};

const styles = StyleSheet.create({
  listDisplay: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 5,
    fontSize: 20,
    
  },

  pressedItem:{
    opacity: 0.7,
    backgroundColor:"red",
  }
});

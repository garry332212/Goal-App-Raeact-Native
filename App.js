import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { OutputData } from "./components/OutputData";
import { InputData } from "./components/InputData";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [output, setOutput] = useState([]);

  function startNewTask() {
    setModalVisible(true);
  }
  function endNewTask() {
    setModalVisible(false);
  }

  function addInputHandler(inpitData) {
    setOutput((currInput) => [
      ...currInput,
      { text: inpitData, id: Math.random().toString() },
    ]);

    endNewTask();
  }

  function deleteGoalHandler(id) {
    setOutput((currInput) => {
      return currInput.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.nav}>What To-Do</Text>
        </View>
       
        <View style={styles.btnSignUp}>
          <Button title="Add Today's Goal" color="#4b0082" onPress={startNewTask} />
        </View>

        {modalVisible && (
          <InputData
            onInputAdd={addInputHandler}
            showModal={modalVisible}
            onCancelBtn={endNewTask}
          />
        )}
        <View style={styles.listAea}>
          <FlatList
            data={output}
            renderItem={(itemData) => {
              return (
                <OutputData
                  data={itemData.item.text}
                  id={itemData.item.id}
                  deleteData={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    textAlign: "center",
    paddingHorizontal: 16,
    backgroundColor: "#8CC0DE",
  },

  nav: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  heading: {
    padding: 20,
  },

  btnSignUp: {
    padding: 20,
  },

  listAea: {
    paddingTop: 10,
    flex: 5,
  },
});

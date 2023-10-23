import {
  Text,
  View,
  StyleSheet,
  Platform,
  TextInput,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([
      ...taskItems,
      {
        name: task,
        isActive: true,
      },
    ]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleTaskCompleted = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <View key={index}>
                <Task zaba={item} funckija={handleTaskCompleted}></Task>
              </View>
            );
          })}
        </View>

        {/* {posts.map((post, index) => {
          //TODO: ako je index < 11 ispisati ako ne ne ispisati
          if (post.title.includes("odio")) return <Text>Loading</Text>;
          if (post.title.includes("odios")) return;
          return (
            // <Text>{radnik.ime}</Text>
            <View key={post.id}>
              <Text>
                {index} - {post.title}
              </Text>
            </View>
          );
        })} */}
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Task = (props) => {
  const { name, isActive, onPressDelete } = props.zaba; //1 dodao onPressDelete prop

  return (
    <View style={styles.item} onPress={props.funckija}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={{ color: isActive ? "green" : "red" }}>{name}xxx</Text>
      </View>
      <TouchableOpacity style={styles.close} onPress={onPressDelete}>
        <Ionicons name="close-outline" size={24} color={"red"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    maxWidth: "80%",
  },
  close: {
    height: 24,
    width: 24,
  },
});

export default Task;

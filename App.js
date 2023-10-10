import { Text, View, StyleSheet, Platform, TextInput } from 'react-native'
import React from 'react'
import Task from './components/Task'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function App() {
    return (
      <View style={styles.container}>

      {/* Todays tasks */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>

            <View style={styles.items}>
            {/* This is where the tasks will be */}
              <Task text={'Task 1'}/>
              <Task text={'Task 2'}/>
            </View>

        </View>

      {/* Write a task */}
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder="Write a task" />
      </KeyboardAvoidingView>

      <TouchableOpacity >
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E8EAED'
  },
  taskWrapper:{
   paddingTop: 80,
   paddingHorizontal: 20,
  },
  sectionTitle:{
   fontSize: 24,
   fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  }
})

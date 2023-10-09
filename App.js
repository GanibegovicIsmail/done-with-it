import { Text, View, StyleSheet } from 'react-native'
import React from 'react'
import Task from './components/Task'

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
              <Task/>
              <Task/>
              <Task/>
            </View>

        </View>


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
  
  }
})

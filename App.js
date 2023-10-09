import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
    return (
      <View style={styles.container}>

        {/* Todays tasks */}
        <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        </View>

      <View style={styles.items}>
      {/* This is where the tasks will be */}
      </View>

      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 35,
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

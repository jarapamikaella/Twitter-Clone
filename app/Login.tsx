import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>LoginScreen</Text>
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
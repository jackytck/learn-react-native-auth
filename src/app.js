import React, { Component } from 'react'
import {
  View
} from 'react-native'
import firebase from 'firebase'
import {
  Header
} from './components/common'
import {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId
} from './creds'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount () {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId
    })
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}

export default App

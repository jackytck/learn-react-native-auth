import React, { Component } from 'react'
import {
  View
} from 'react-native'
import firebase from 'firebase'
import {
  Header,
  CardSection,
  Button,
  Spinner
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
  state = {
    loggedIn: null
  }

  componentWillMount () {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View>
            <Spinner size='large' />
          </View>
        )
    }
  }

  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App

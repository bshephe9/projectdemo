import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
        <ImageBackground
          source={require('../assets/images/bg.jpg')}
          style={styles.container}>

          <View style={styles.overlayContainer}>

            <View>
              <Text style={styles.header}>enterVal</Text>
            </View>

            <View>
              <Text style={styles.timer}>9:30 AM</Text>
            </View>

          </View>

        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    alignItems: 'center', 
    color: 'black', 
    marginTop: 120, 
  }, 
  header: { 
    fontSize: 35,
    borderColor: '#fff',
    fontWeight: 'bold',
    color: '#fff',
    borderWidth: 2, 
    padding: 20, 
    paddingLeft: 40, 
    paddingRight: 40, 
  }, 
  timer: { 
    color: '#fff',
    fontSize: 25,
    marginTop: 20,
  },
});



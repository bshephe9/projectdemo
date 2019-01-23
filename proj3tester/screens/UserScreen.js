import React from 'react';
import { ScrollView, StyleSheet, Text} from 'react-native';
import { Card } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card> 
          elevation={1}
          shadowColor="rgb(50,50,50)"
          shadowOpacity={1}
          marginTop={25}
          height={200}
  
        >
          <Text style={{ padding: 10, fontSize: 18, textAlign: 'center'}}>
            Insert Content Here 
          </Text>
        </Card>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});

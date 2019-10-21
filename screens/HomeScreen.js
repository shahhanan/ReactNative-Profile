import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ToastAndroid,
  StyleSheet,
  Text,
  BackHandler,
  View,
  TextInput,
  Button,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      modalVisible: false
    }
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show("Can't go Back!", ToastAndroid.SHORT);
    return true;
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  componentWillUnmount = () =>{
    this.setState({ modalVisible: false });
  }
  handleSubmitButton = () =>{
    if(this.state.Name == ""){
      ToastAndroid.show("Please Enter Something!!!", ToastAndroid.SHORT);
    }else{
      this.setModalVisible(true)
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#d19b28', '#20b0a9', '#188f89']}
          style={{
            flex: 1, position: "relative", alignItems: 'center', justifyContent: "center",
            alignItems: "center"
          }}>
          <Image style={styles.myImage} source={require('../assets/h2.jpg')} />
          <Text style={styles.textForName}>Please Enter your Name </Text>
          <View style={styles.detailsContainer}>
            <TextInput placeholder="Enter Name" onChangeText={(text) => this.setState({ Name: text })} selectionColor={'#bdc2c9'} style={styles.textBoxForName}></TextInput>
            <View style={styles.Submitbuttom}>
              <Button title="Submit" color="#ed8e53" onPress={() => this.handleSubmitButton()}></Button>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style={{
                width: 300,
                height: 400,
                backgroundColor: "white",
                opacity: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: "#d3d3d3"
              }}>
                      <Text style={styles.modalThanksText}>Thanks {this.state.Name} for Entering your Name</Text> 
                      <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(false);
                      }}>
                      <Text style={styles.hideModaltext}>Close</Text>
                    </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </LinearGradient>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  myImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginBottom: 20

  },
  textForName: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 1, },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: 'center',
    justifyContent: "center",
    paddingBottom: 15,
    width: 300
  },
  textBoxForName: {
    width: 200,
    height: 50,
    backgroundColor: "#fff",
    borderBottomColor: '#bdc2c9',
    borderBottomWidth: 2,
    marginBottom: 20,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Submitbuttom: {
    backgroundColor: "#ed8e53",
    width: 200,
    height: 30,
    marginBottom: 10,
    borderRadius: 5
  },
  modalThanksText:{
    color: "#ed8e53",
    fontSize: 16,
    marginBottom: 15
  },
  hideModaltext:{
    color: "black",
    fontSize: 20,
    
  }
});

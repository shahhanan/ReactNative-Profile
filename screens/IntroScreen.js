import React from 'react';
import { StyleSheet, View, Text, Image, I18nManager } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';

I18nManager.forceRTL(false);

const slides = [
  {
    key: 'tile1',
    title: 'My Name Is Hanan Shabir',
    text: 'I am a Full Stack (Web and Mobile) developer',
    image: require('../assets/4.jpg'),
    backgroundColor: '#34c0eb',
  },
  {
    key: 'stile2',
    title: 'I am from bangalore, INDIA',
    text: 'I have been working as a developer from last Two years. ',
    image: require('../assets/2.jpeg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'tile3',
    title: 'My Skill Sets Include',
    text: 'Html, css, bootstrap, React, React Native, Nodejs, Angular8, redux, SagaRedux, Javascript(ES6), jQuery',
    image: require('../assets/3.jpeg'),
    backgroundColor: '#22bcb5',
  }
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});

export default class IntroScreen extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('Home')
  }
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _onSkip = () =>{
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={this._onDone}
        renderItem={this._renderItem}
        onSkip={this._onSkip}
      />
    );
  }
}
IntroScreen.navigationOptions = {
  header: null,
};

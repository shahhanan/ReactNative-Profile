import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  render(){
  return (
    <ScrollView style={styles.container}>
      {/***/}
      <ExpoLinksView />
    </ScrollView>
  )}
}

const mapStateToProps = ({ FormDetails }) => ({
  Rewiews: FormDetails.RewiewsData,
});

LinksScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { connect } from "react-redux";

class RewiewsScreen extends React.Component {
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
export default connect(mapStateToProps)(RewiewsScreen);

RewiewsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

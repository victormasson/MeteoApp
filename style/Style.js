import {StyleSheet} from 'react-native';
import color from './Color';

export default StyleSheet.create({
  mainView: {
    marginVertical: 40,
    margin: 10
  },
  view: {
    margin: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
  },
  container: {
    marginBottom: 10
  },
  header: {
    backgroundColor: color.red
  },
  headerTitle: {
    color: color.white
  }
})
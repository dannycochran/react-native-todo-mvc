import {
  ViewStyle,
  TextStyle,
  StyleSheet,
  Dimensions
} from 'react-native';

const black = '#333';
const green = '#66bb6a';

export const width = Dimensions.get('window').width;
export const height = 60;

export const shadowProps = {
  shadowColor: 'black',
  shadowOpacity: 0.2,
  shadowOffset: {
    height: 5
  },
  shadowRadius: 6
};

export const buttonUnderlay = '#43a047';
export const buttonUnderlayLight = '#eee';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  appWrapper: {
    flex: 1,
    marginTop: 20
  } as ViewStyle,

  todoContainer: {
    height,
    width,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center'
  } as ViewStyle,

  todoWrapper: {
    height,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  } as ViewStyle,

  todoText: {
    fontWeight: '100',
    color: black
  } as TextStyle,

  addButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  addText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white'
  } as TextStyle,

  scrollContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    ...shadowProps
  } as ViewStyle,

  headerText: {
    fontSize: 100,
    fontWeight: '100',
    color: '#e57373',
    textAlign: 'center'
  } as TextStyle,

  inputContainer: {
    ...shadowProps,
    height: 70,
    elevation: 4,
    flexDirection: 'row',
    marginTop: 5,
  } as ViewStyle, 

  textInputFocused: {
    flex: 1,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '100'
  } as TextStyle,

  textInput: {
    flex: 1,
    textAlign: 'center',
    fontStyle: 'italic'
  } as TextStyle,

  footerContainer: {
    height,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowProps
  } as ViewStyle,

  tabContainer: {
    flex: 1,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,

  selectedTab: {
    borderTopColor: green,
    borderTopWidth: 2
  } as ViewStyle,

  tabText: {
    color: black
  } as TextStyle,

  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  } as ViewStyle
});

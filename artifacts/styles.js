import { StyleSheet, Dimensions } from 'react-native';
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
    appContainer: {
        flex: 1
    },
    appWrapper: {
        flex: 1,
        marginTop: 20
    },
    todoContainer: {
        height,
        width,
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    todoWrapper: {
        height,
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    todoText: {
        fontWeight: '100',
        color: black
    },
    addButton: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: green,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addText: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white'
    },
    scrollContainer: Object.assign({ flex: 1, flexDirection: 'row', alignSelf: 'stretch', backgroundColor: '#fff', justifyContent: 'center' }, shadowProps),
    headerText: {
        fontSize: 100,
        fontWeight: '100',
        color: '#e57373',
        textAlign: 'center'
    },
    inputContainer: Object.assign({}, shadowProps, { height: 70, elevation: 4, flexDirection: 'row', marginTop: 5 }),
    textInputFocused: {
        flex: 1,
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: '100'
    },
    textInput: {
        flex: 1,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    footerContainer: Object.assign({ height, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }, shadowProps),
    tabContainer: {
        flex: 1,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedTab: {
        borderTopColor: green,
        borderTopWidth: 2
    },
    tabText: {
        color: black
    },
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
//# sourceMappingURL=styles.js.map
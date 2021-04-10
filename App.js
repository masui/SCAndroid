/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, TextInput, View, Button, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';

import KeyEvent from 'react-native-keyevent';

const WebPage = (props) => {
  return (
    <WebView source={{uri: props.url}} style={{position:'absolute', top:10, width:800, left:200, height:600}} />
  );
}

//var count = 0
const urls = [
      "https://example.com",
      "http://hondana.org"
      ]
var url = urls[0]
  
const App: React.FC = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [count, setCount] = React.useState(0);

  function sayHello() {
    alert('Hello!');
  }

  //componentDidMount() {
    KeyEvent.onKeyDownListener((keyEvent) => {
      setCount(count+1)
      url = urls[count % 2]
      //alert(`code = ${keyEvent.keyCode}`);
      //alert(count)
      //alert(url)
      console.log(`onKeyDown keyCode: ${keyEvent.keyCode}`);
      console.log(`Action: ${keyEvent.action}`);
      console.log(`Key: ${keyEvent.pressedKey}`);
    });
  //}

  // ボタンやTextInputでabsoluteとかはstyleは全然使えない模様
  // Viewの中に別のViewは書けないのかも
  // Viewの中でabsoluteは使えたり使えなかったり?
  return (
    <>
      <View onKeyPress={sayHello} style={{position:'absolute', top:30, left:10, width:900}}>
        <Text style={{position:'absolute', top: 50, left:10, fontStyle:'italic', fontWeight:'bold', fontSize:12}}>
          Line 111
        </Text>
        <Text style={{position:'absolute', top: 70, left:20}}>
          Line 2
        </Text>
        <Text style={{position:'absolute', top: 90, left:30}}>
          Line 2.1
        </Text>
        <Text style={{position:'absolute', top: 110, left:30}}>
          Line 2.2
        </Text>
        <TextInput
           onKeyPress={sayHello}
           style={styles.input}
           onChangeText={onChangeText}
           value={text}
	   editable
        />
      </View>

      <WebPage url={url} />

      <View style={{position:'absolute', top:400, left:20, width:100}}>
        <Button title="Press me" />
      </View>
	
    </>
  );
};

//      <WebView source={{uri: "http://gyatv.com/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC"}} style={{position:'absolute', top:10, width:600, left:200, height:400}} />
//            onPress= {this.xxx()}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 2,
    width:150,
    borderWidth: 1,
  },
  root: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;

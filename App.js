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

const App: React.FC = () => {
  function xxx(){
    alert('xxxxx');
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={{position:'absolute', top:10, left:10, width:900}}>
        <TextInput style={{position:'absolute', top: 0, left:10}}>
        </TextInput>
        <Text style={{position:'absolute', top: 30, left:10, fontStyle:'italic', fontWeight:'bold', fontSize:12}}>
          Line 1
        </Text>
        <Text style={{position:'absolute', top: 50, left:20}}>
          Line 2
        </Text>
        <Text style={{position:'absolute', top: 70, left:30}}>
          Line 2.1
        </Text>
      </View>
        
      <WebView source={{uri: "http://gyatv.com/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC"}} style={{position:'absolute', top:10, width:600, left:200, height:400}} />

  
        <View style={{position:'absolute', top:450, left:20, width:100}}>
          <Button
            title="Press me"
          />
        </View>
    </>
  );
};

/*            onPress= {this.xxx()} */

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;


/*
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
*/
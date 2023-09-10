import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { WebView } from 'react-native-webview';


export default function App() {
  const [webViewVisible, setWebViewVisible] = useState(false);

  const toggleGitHubProfile = () => {
    setWebViewVisible(!webViewVisible);
  };

  return (
    <View style={styles.container}>

      <View style={styles.topContent}>
        <View>
          <Image
            source={require('./assets/Dp.jpg')}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
        </View>
        <Text style={styles.name}>Israel Olaide</Text>
        <Button
          title={webViewVisible ? 'Close GitHub' : 'Open GitHub'}
          onPress={toggleGitHubProfile}
        />
      </View>
      {webViewVisible && (
        <WebView
          source={{ uri: 'https://github.com/Hisrael01' }}
          style={styles.webview}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
  ubtn: {
    marginTop: 0,
  },
});

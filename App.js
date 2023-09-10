import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;

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
            style={styles.image}
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
    marginTop: 0.2 * windowWidth,
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 0.1 * windowWidth,
    marginTop: 0.02 * windowWidth,
  },
  image: {
    width: 0.4 * windowWidth,
    height: 0.4 * windowWidth,
    borderRadius: 0.2 * windowWidth,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
  ubtn: {
    marginTop: 0,
  },
});

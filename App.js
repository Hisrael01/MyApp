import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function App() {
  const [webViewVisible, setWebViewVisible] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle uploading a new profile picture
  const handleUploadPicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setProfilePicture(result.uri);
      // Save the image URI in AsyncStorage
      await AsyncStorage.setItem('profilePicture', result.uri);
    }
  };

  useEffect(() => {
    // Retrieve the saved image URI from AsyncStorage when the component mounts
    const getProfilePicture = async () => {
      const uri = await AsyncStorage.getItem('profilePicture');
      if (uri) {
        setProfilePicture(uri);
      }
    };

    getProfilePicture();
  }, []); // Empty dependency array to run only once on mount

  const toggleGitHubProfile = () => {
    setWebViewVisible(!webViewVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.image} />
        ) : (
          <Text>No Profile Picture</Text>
        )}
        <Text style={styles.name}>Israel Olaide</Text>
        <Button style={styles.ubtn} title="Upload Picture" onPress={handleUploadPicture} />
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
    fontWeight: 'bold',
    fontSize: 50,
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

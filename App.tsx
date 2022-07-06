import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import ShakeEventExpo from './utils/shakeEvent';

export default function App() {
  const [bgColor, setBgColor] = useState('#f4f4f4')

  const randomBgColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setBgColor('#' + randomColor)
  }

  useEffect(() => {
    ShakeEventExpo.addListener(randomBgColor)

    return () =>  ShakeEventExpo.removeListener();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `linear-gradient`
    },
    text: {
      fontWeight: '500',
      fontSize: 24,
      letterSpacing: .25,
    }
  });

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Shake device</Text>
    </View>
  );
}


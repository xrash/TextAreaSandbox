import React from 'react';
import { StyleSheet, TextInput, View, PixelRatio } from 'react-native';

export default function App() {
  const fontSize = 16
  const numberOfLines = 4

  console.log('PixelRatio.getFontScale()', PixelRatio.getFontScale())
  console.log('PixelRatio.get()', PixelRatio.get())
  console.log('PixelRatio.getPixelSizeForLayoutSize(100)', PixelRatio.getPixelSizeForLayoutSize(100))

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'black', height: 64 }}></View>

      <View style={{ padding: 16 }}>
        <TextInput
          onKeyPress={(e) => {
            console.log('onKeyPress', e.nativeEvent.key)
          }}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout
            console.log('onLayout', 'w', width, 'h', height)
          }}
          multiline
          numberOfLines={numberOfLines}
          style={{
            backgroundColor: 'white',
            textAlignVertical: 'top',
            fontSize,
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

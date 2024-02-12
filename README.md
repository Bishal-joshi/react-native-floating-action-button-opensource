# React Native Floating Action Button

A customizable React Native floating action button component with optional styling options.

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-floating-action-button-opensource

```
## Usage

```javascript
import React from 'react';
import { View, Text } from 'react-native';
import FloatingActionButton from './src/FloatingAction';

const MainScreen = () => {
  const subButtons = [
    { label: 'A', color: 'red', onPress: () => console.log('Button A pressed') },
    { label: 'B', color: 'green', onPress: () => console.log('Button B pressed') },
    { label: 'C', color: 'orange', onPress: () => console.log('Button C pressed') },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Main Content */}
      <Text>Main Content</Text>
      
      {/* Use the FloatingActionButton component with dynamic buttons */}
      <FloatingActionButton subButtons={subButtons} />
    </View>
  );
};

export default MainScreen;


```

## Props
### Required Props
1. subButtons (Array)
An array of objects representing sub-buttons. Each object should have the following properties:

i). label (String): Text to be displayed on the sub-button.
ii). color (String): Background color of the sub-button (optional, defaults to 'red').
iii). onPress (Function): Function to be executed when the sub-button is pressed.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
Feel free to further customize the README according to your project's specifics.


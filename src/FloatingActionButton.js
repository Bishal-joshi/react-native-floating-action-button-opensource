import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const FloatingActionButton = ({ subButtons }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleButtons = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const buttonStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.7],
        }),
      },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -subButtons.length*80],
        }),
      },
    ],
  };

  return (
    <View style={{ position: 'absolute', bottom: 16, right: 16 }}>
      {/* Main Button */}
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: 48,
          height: 48,
          borderRadius: 24,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}
        onPress={toggleButtons}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>+</Text>
      </TouchableOpacity>

      {/* Sub-buttons */}
      <Animated.View style={[buttonStyle, { position: 'absolute' }]}>
        {isExpanded &&
          subButtons.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: button.color || 'red', // Default to red if color is not provided
                width: 48,
                height: 48,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 8,
              }}
              onPress={button.onPress}
            >
              <Text style={{ color: 'white', fontSize: 16 }}>{button.label}</Text>
            </TouchableOpacity>
          ))}
      </Animated.View>
    </View>
  );
};

export default FloatingActionButton;

import { StatusBar } from "expo-status-bar";
import { NativeModules, View, Text, Pressable } from "react-native";
import { opacityAddStyle, styles } from "./styles";

export default function App() {
  const mapboxNavigation = NativeModules.RNMapboxNavigation;

  const onPress = () => {
    mapboxNavigation.navigateToExample();
  };

  return (
    <View style={styles.container}>
      <Pressable style={opacityAddStyle} onPress={onPress}>
        <Text>Navigate!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

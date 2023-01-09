import { StyleSheet } from "react-native";

const getOpacity = (pressed: boolean) => {
  if (pressed) {
    return 0.2;
  } else {
    return 1;
  }
};

export const opacityAddStyle = ({ pressed }: { pressed: boolean }) => [
  styles.button,
  { opacity: getOpacity(pressed) },
];

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#add8e6",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});

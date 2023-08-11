import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your goal!"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});

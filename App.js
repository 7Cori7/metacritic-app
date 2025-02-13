import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

const icon = require("./assets/icon.png");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={icon}
        style={{ width: 100, height: 100, resizeMode: "center" }}
      />
      <Image
        source={{
          uri: "https://i.pinimg.com/736x/3d/6a/cd/3d6acd8cda1cf47305d5e0665b19b44a.jpg",
        }}
        style={{ width: 201, height: 200 }}
      />
      <Text style={{ color: "white" }}>Hello!</Text>
      <Button title="Pulsa Aquí" onPress={() => alert("hola!")} />
      <TouchableHighlight
        underlayColor={"blue"}
        onPress={() => alert("Holaaa")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 100,
        }}
      >
        <Text style={{ color: "white" }}>Touch Here</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09f",
    alignItems: "center",
    justifyContent: "center",
  },
});

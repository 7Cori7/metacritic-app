/* eslint-disable prettier/prettier */
import { Text, View, Image, StyleSheet } from "react-native";

export function ProductCard({ product }) {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={cardStyles.image} />
      </View>
      <Text style={cardStyles.title}>{product.title}</Text>
      <Text style={cardStyles.price}>${product.price}</Text>
      <Text
        style={{
          color: "white",
          textAlign: "justify",
          marginHorizontal: 10,
        }}
      >
        {product.description}
      </Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    marginVertical: 24,
  },
  imageContainer: {
    backgroundColor: "white",
    width: 200,
    height: 200,
    marginHorizontal: 90,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    color: "green",
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
  },
});

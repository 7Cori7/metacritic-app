/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import { getProducts } from "../lib/products";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ProductCard } from "./ProductCard";

export function Main() {
  const [products, setProducts] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        {products.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color={'#fff'} size={"large"} />
        </View>
        ) : ( 
            <ScrollView>
                { products.map((product) => <ProductCard key={product.sku}  product={product} /> )}
            </ScrollView>
        )}
    </View>
  );
}

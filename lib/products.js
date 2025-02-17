/* eslint-disable prettier/prettier */
export async function getProducts() {
  const PRODUCTS =
    "https://dummyjson.com/products?limit=10";

  const rawData = await fetch(PRODUCTS);
  const json = await rawData.json();

  const {
    products,
  } = json;

  
  return products.map((item) => {

    const { id, title, description, category, price, rating, brand, reviews, images, thumbnail, meta, sku } = item;
    const { createdAt, qrCode } = meta;

    return {
        id,
        sku,
        title,
        description,
        category,
        price,
        rating,
        brand,
        reviews,
        images,
        thumbnail,
        createdAt,
        qrCode
    };
  });
};

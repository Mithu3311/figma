// lib/dataFetcher.ts

import { client } from "./client";


export const fetchProductData = async (productId: string) => {
  const query = `*[_type == "product" && _id == $productId][0]`;
  const params = { productId };

  return await client.fetch(query, params);
};

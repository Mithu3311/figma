import { defineQuery } from "next-sanity";

export const fourPro = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) [0..3] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    category,
    stockLevel,
  }
`);

export const threePro = defineQuery(`
  *[_type == "product"] | order(_createdAt desc) [9..11] {
    _id,
    name,
    description,
    price,
    "imageUrl": image.asset->url,
    category,
    stockLevel,
  }
`);

    export const allProduct = defineQuery(`
    *[_type == "product"] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      stockLevel,
    }
  `)
  
  export const productById =defineQuery(`
    *[_type == "product" && _id == $id][0] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url,
      category,
      stockLevel,
    }
  `)

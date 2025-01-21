import { defineQuery } from "next-sanity";

export const fourPro = defineQuery(`
    *[_type == "product"][0..3]{
    _id,
    name,
    description,
    price,,
    "imageUrl": image.asset->url
    }
    `);

    export const allProduct =defineQuery(`
    *[_type == "product"] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url
    }
  `)
  
  export const productById =defineQuery(`
    *[_type == "product" && _id == $id][0] {
      _id,
      name,
      description,
      price,
      "imageUrl": image.asset->url
    }
  `)

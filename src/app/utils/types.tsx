
export type Product = { 
    id: number;
    title:string;
    image: string[] ;
    slug: string;
    price: number;
    category: string;
    discription: string;
    qty: number;
    discount: number;
};

export type Cart = {
    id:number;
    title:string;
    image: string[] ;
    slug: string;
    price: number;
    discount: number;
    category: string;
    qty: number;
    uuid: number | string | undefined;
};

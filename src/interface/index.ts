export interface ProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    quantity:number,
    image: string,
    rating: { rate: 3.6, count: 145 }
}

export interface Props {
    product:ProductType
    fill?:boolean
}
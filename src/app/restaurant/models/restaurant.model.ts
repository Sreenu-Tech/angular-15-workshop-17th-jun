export interface IRestaurant {
    // number:  can be store both whole & fractionl no
    // int,long,float,double
    resId: number,
    name: string
    image: string
    category: string
    rating: number
    deliveryTime: number
    costForTwo: number
}

export interface IMenuCategory {
    catId: number,
    name: string
    items:IMenuItem[]
}

export interface IMenuItem {
    id: number,
    name: string
    price: number
    description: string
    // qty is not exist in API
    // undefined
    // store the cart qty
    qty:number
}
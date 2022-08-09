import { Item } from "src/@resources/models/item";


export interface ProductsState {
  items: Item[];
  categories:string[];
  limit:number;
  skip:number;
  total:number;
  cart:{id:number, quantity:number}[];
  totalQuantity:number;
  categoryFilter:string;
  searchKey:string;
}

export const initialState: ProductsState = {
    items: [],
    categories:[],
    limit:30,
    skip:30,
    total:100,
    cart:[],
    totalQuantity:0,
    categoryFilter:'all categories',
    searchKey:''
};
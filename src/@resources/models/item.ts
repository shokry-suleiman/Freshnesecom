export interface Item {
    id?: number,
    title?: String | null,
    description?: String | null,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: string | null,
    category?: string,
    thumbnail?: string | null
    images?: string[] | null
}
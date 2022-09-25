export interface IProduct {
    _id: string;
    category: string;
    description?: string;
    images: string[];
    price: number;
    title: string;
    link: string


    //TODO: AGREGAR CREATEAT Y UPDATEDAT
    createdAt: string;
    updatedAt: string;
}

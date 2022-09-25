interface SeedProduct {
    category: string;
    description?: string;
    images: string[];
    price: number;
    title: string;
    link: string
}


interface SeedData {
    products: SeedProduct[],
}



export const initialData: SeedData = {
    products: [
        {
            description: "Tapete de entrenamiento para perros y de protección para pisos, contiene atrayente para facilitar el entrenamiento.",
            images: [
                'https://m.media-amazon.com/images/I/61eKv+xZd+L._AC_SX679_.jpg',
                'https://m.media-amazon.com/images/I/61siyJzqnNL._AC_SL1000_.jpg',
            ],
            price: 251.10,
            title: "Dry Pet Tapete Entrenador para Perro de 30 Piezas",
            link: 'https://www.amazon.com.mx/Dry-Pet-Tapete-Entrenador-Piezas/dp/B018M8AR90/?_encoding=UTF8&pd_rd_w=kxSQq&content-id=amzn1.sym.9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_p=9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_r=5WNJ31AND16ZWF606FNY&pd_rd_wg=IVrKV&pd_rd_r=9297ea75-a76a-4567-a4df-5826d809863d&ref_=pd_gw_ci_mcx_mi&th=1',
            category: 'Mascotas',
        },
        {
            description: "Tapete de entrenamiento para perros y de protección para pisos, contiene atrayente para facilitar el entrenamiento.",
            images: [
                'https://m.media-amazon.com/images/I/61eKv+xZd+L._AC_SX679_.jpg',
                'https://m.media-amazon.com/images/I/61siyJzqnNL._AC_SL1000_.jpg',
            ],
            price: 251.10,
            title: "Dry Pet Tapete Entrenador para Perro de 30 Piezas",
            link: 'https://www.amazon.com.mx/Dry-Pet-Tapete-Entrenador-Piezas/dp/B018M8AR90/?_encoding=UTF8&pd_rd_w=kxSQq&content-id=amzn1.sym.9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_p=9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_r=5WNJ31AND16ZWF606FNY&pd_rd_wg=IVrKV&pd_rd_r=9297ea75-a76a-4567-a4df-5826d809863d&ref_=pd_gw_ci_mcx_mi&th=1',
            category: 'Tecnología',
        },
    ]
}
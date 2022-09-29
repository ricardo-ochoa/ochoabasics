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
                "description": "Tapete de entrenamiento para perros y de protección para pisos, contiene atrayente para facilitar el entrenamiento.",
                "images": [
                    "https://m.media-amazon.com/images/I/61eKv+xZd+L._AC_SX679_.jpg",
                    "https://m.media-amazon.com/images/I/61siyJzqnNL._AC_SL1000_.jpg"
                ],
                "price": 251.1,
                "title": "Dry Pet Tapete Entrenador para Perro de 30 Piezas",
                "link": "https://www.amazon.com.mx/Dry-Pet-Tapete-Entrenador-Piezas/dp/B018M8AR90/?_encoding=UTF8&pd_rd_w=kxSQq&content-id=amzn1.sym.9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_p=9de94ae8-c4ee-4224-ab57-217ec23e173e&pf_rd_r=5WNJ31AND16ZWF606FNY&pd_rd_wg=IVrKV&pd_rd_r=9297ea75-a76a-4567-a4df-5826d809863d&ref_=pd_gw_ci_mcx_mi&th=1",
                "category": "Mascotas"
            },
            {
                "description": "LG 27UL500 Monitor, 27-Inch Screen, LED-Lit, 3840x2160 pixels, 16: 9, 2 HDMI, 1 USB, 60 hertz",
                "images": [
                    "https://m.media-amazon.com/images/I/81lJmX1H4JL._AC_SX679_.jpg"
                ],
                "price": 6299,
                "title": "LG 27UL500 Monitor, 27-Inch Screen, LED-Lit, 3840x2160 pixels, 16: 9, 2 HDMI, 1 USB, 60 hertz",
                "link": "https://www.amazon.com.mx/LG-27UL500-Monitor-27-Inch-3840x2160/dp/B07TCDBX17/ref=sr_1_omk_2?keywords=monitor%2B4k&qid=1664424034&qu=eyJxc2MiOiI1Ljg4IiwicXNhIjoiNS44MSIsInFzcCI6IjQuNTYifQ%3D%3D&sprefix=monito%2Caps%2C105&sr=8-2&ufe=app_do%3Aamzn1.fos.66c34496-0d28-4d73-a0a1-97a8d87ec0b2&th=1",
                "category": "Tecnología"
            },
            {
                "description": "Tapete de entrenamiento para perros y de protección para pisos, contiene atrayente para facilitar el entrenamiento.",
                "images": [
                    "https://images-na.ssl-images-amazon.com/images/I/51-RoANBXoL._SX379_BO1,204,203,200_.jpg"
                ],
                "price": 1392.63,
                "title": "Fundamentals of Software Architecture: An Engineering Approach",
                "link": "https://www.amazon.com.mx/Fundamentals-Software-Architecture-Comprehensive-Characteristics/dp/1492043451/ref=sr_1_1?keywords=fundamentals+of+software+architecture&qid=1664423908&qu=eyJxc2MiOiIwLjIxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=fundamentals+of+software+architecture%C3%A7%2Caps%2C111&sr=8-1",
                "category": "Libros"
            },
            {
                "description": "",
                "images": [
                    "\thttps://m.media-amazon.com/images/I/61Op0Cm4B0L._AC_SX679_.jpg"
                ],
                "price": 2799,
                "title": "Monitor BenQ GW2280 21.5” Full HD Bisel delgado HDMIx2 Tecnología BI ",
                "link": "https://www.amazon.com.mx/dp/B00KYCSRQI/ref=sspa_dk_detail_3?psc=1&pf_rd_p=841710af-c37d-4f5e-b675-678932798cf0&pf_rd_r=TA531X9FQZN6FFFSRJZV&pd_rd_wg=FN1Nw&pd_rd_w=jviwR&content-id=amzn1.sym.841710af-c37d-4f5e-b675-678932798cf0&pd_rd_r=ae87b4c3-c3cd-4c0e-849a-698f84ad3e25&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYTzZWQzRIQlRDNUcmZW5jcnlwdGVkSWQ9QTA1MzIwNDQzVUFJUERRVFZWUVJTJmVuY3J5cHRlZEFkSWQ9QTA4OTExODEzM1ZHQjVSNVNCVFc4JndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
                "category": "Tecnología"
            },
            {
                "description": "",
                "images": [
                    "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_SY450_.jpg"
                ],
                "price": 999,
                "title": "Bocina inteligente con Alexa Echo Dot (3ra generación)",
                "link": "https://www.amazon.com.mx/dp/B00KYCSRQI/ref=sspa_dk_detail_3?psc=1&pf_rd_p=841710af-c37d-4f5e-b675-678932798cf0&pf_rd_r=TA531X9FQZN6FFFSRJZV&pd_rd_wg=FN1Nw&pd_rd_w=jviwR&content-id=amzn1.sym.841710af-c37d-4f5e-b675-678932798cf0&pd_rd_r=ae87b4c3-c3cd-4c0e-849a-698f84ad3e25&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFYTzZWQzRIQlRDNUcmZW5jcnlwdGVkSWQ9QTA1MzIwNDQzVUFJUERRVFZWUVJTJmVuY3J5cHRlZEFkSWQ9QTA4OTExODEzM1ZHQjVSNVNCVFc4JndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
                "category": "Tecnología"
            },
            {
                "description": "",
                "images": [
                    "https://m.media-amazon.com/images/I/61RuffqqI6L._AC_SX679_.jpg"
                ],
                "price": 1549,
                "title": "Echo Dot (4ta Gen) - Bocina inteligente con reloj y Alexa",
                "link": "https://www.amazon.com.mx/Nuevo-Echo-Dot-4ta-Gen/dp/B07XJ8C8F7/ref=d_p13n_ds_purchase_sim_1p_dp_desktop_sccl_1_2/136-5553726-4250030?pd_rd_w=sowOe&content-id=amzn1.sym.e7a23d1c-02b5-4c3b-aedf-9570768e92ae&pf_rd_p=e7a23d1c-02b5-4c3b-aedf-9570768e92ae&pf_rd_r=CYJXFYKBM7EV1AQTCQVM&pd_rd_wg=avszn&pd_rd_r=69041a31-7c41-4b2a-bd8a-647d0762ab93&pd_rd_i=B07XJ8C8F7&psc=1",
                "category": "Tecnología"
            },
            {
                "description": "",
                "images": [
                    "https://m.media-amazon.com/images/I/613HESgMbAL._AC_SX679_.jpg"
                ],
                "price": 4499,
                "title": "Echo Studio - Bocina inteligente de alta fidelidad con Alexa",
                "link": "https://www.amazon.com.mx/dp/B07NQHB1D8?ref=ods_ucc_aucc_DEVICECODEFIRSTLASTLETTER_rc_nd_ucc",
                "category": "Tecnología"
            },
            {
                "description": "",
                "images": [
                    "https://m.media-amazon.com/images/I/71jYRcvM7GL._AC_SX679_.jpg"
                ],
                "price": 6299,
                "title": "Echo Show 15, pantalla inteligente Full HD de 15.6”",
                "link": "https://www.amazon.com.mx/Presentamos-echo-show-15-pantalla-inteligente-con-Alexa/dp/B08MQLDFF6/ref=d_p13n_ds_purchase_sim_1p_dp_desktop_sccl_1_7/136-5553726-4250030?pd_rd_w=4iQPx&content-id=amzn1.sym.e7a23d1c-02b5-4c3b-aedf-9570768e92ae&pf_rd_p=e7a23d1c-02b5-4c3b-aedf-9570768e92ae&pf_rd_r=2RGVBSMCZV9E93ZJ25SA&pd_rd_wg=iiuLk&pd_rd_r=b123d6e5-bad6-4ffa-bb96-7366a0472f36&pd_rd_i=B08MQLDFF6&psc=1",
                "category": "Tecnología"
            }
        ]
}
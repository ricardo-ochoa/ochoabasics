import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IProduct } from '../../../interfaces/products';
import { Product } from '../../../models';

type Data =
| { message: string }
| IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ){
        case 'GET':
            return gsearchProduct(req, res);

            default:
                return res.status(400).json({
                    message: 'Bad Request'
                })
    }
}

const gsearchProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    let { q = ''} = req.query;

    if (q.length === 0 ) {
        return res.status(400).json({
            message: 'Debe de especificar el query de búsqueda'
        })
    }

    if (q.length === 0 ) {
        return res.status(200).json({
            message: q.toString()
        })
    }

    q = q.toString().toLowerCase();

    await db.connect();
    const products = await Product.find({
        $text: { $search: q }
    }).lean();
    await db.disconnect();


    return res.status(200).json( products )
}

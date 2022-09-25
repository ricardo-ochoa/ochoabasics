import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data = 
| { success: boolean; message: string; }
| IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ){
        case 'GET':
            return getProductByCategory(req, res);

            default:
                return res.status(400).json({
                    message: 'Bad Request',
                    success: false,
                })
    }
}

/*
async function getProductBySlug(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    await db.connect();
    const { slug } = req.query;
    const product = await Product.findOne( { slug } ).lean();
    
    await db.disconnect();

    if( !product ){
        return res.status(404).json({
            message: 'Producto no encontrado'
        })
    }

    product.images = product.images.map( image => {
        return image.includes('http') ? image : `${process.env.HOST_NAME}products/${ image }`
    });


    return res.json( product );
}
*/

const getProductByCategory = async ( req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { category } = req.query;
  
    try {
      await db.connect();
  
      const product = await Product.findOne({
        category,
      });
  
      await db.disconnect();
  
      if (!product) {
        return res.status(400).json({
          message: 'La entrada solicitada no existe en la base de datos...',
          success: false,
        });
      }
  
      product.images = product.images.map(image => {
        return image;
        //return image.includes('http') ? image : `${process.env.HOST_NAME}/products/${image}`;
      });
  
      res.status(200).json(product);
      
    } catch (error: any) {

      await db.disconnect();
      console.log(error);
      res.status(400).json({
        message: 'Lo sentimos ocurrio un error inesperado en el servidor',
        success: false,
      });
    }
  };
  
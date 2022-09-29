import { FC, useEffect } from 'react'
import { Grid } from '@mui/material';
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';

interface Props {
    products: IProduct[]; 
}

export const ProductList: FC<Props> = ({ products }) => {


  return (
    <Grid container spacing={ 2 } marginTop={ 4 }>
        {
            products.map( product => (
                <ProductCard 
                    key={ product.title }
                    product={ product }
                />
            ))
        }
    </Grid>
  )
}

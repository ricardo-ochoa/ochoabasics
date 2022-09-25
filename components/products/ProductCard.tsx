import { FC, useState, useMemo, useEffect } from 'react';
import NextLink from 'next/link'
import { Grid, Card, CardActionArea, CardMedia, Typography, Box, Link, Chip, Button, CardActions, CardContent } from '@mui/material'
import { IProduct } from '../../interfaces'


interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {

  useEffect(() => {
    console.log(product)
  }, [])
  

  return (
    <Grid   item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }
            key={ product._id } 
    >
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={ product.images[0] }
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  ${ product.price } mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  { product.category }
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  { product.title }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             
              <Button size="small" color="info" fullWidth>
                Comprar
              </Button>
              
            </CardActions>
          </Card>
    
  </Grid>
  )
}

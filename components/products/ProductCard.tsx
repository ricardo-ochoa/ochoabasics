import { FC, useState, useMemo, useEffect } from 'react';
import NextLink from 'next/link'
import { Grid, Card, CardActionArea, CardMedia, Typography, Box, Link, Chip, Button, CardActions, CardContent } from '@mui/material'
import { IProduct } from '../../interfaces'


interface Props {
    product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
  

  return (
    <Grid   item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }
            key={ product._id } 
    >
          <Card sx={{ maxWidth:'100%', height:'100%', display:'flex', justifyContent:'space-between', flexDirection:'column' }}>

              <Box>
                <CardActionArea>
                      <CardMedia
                        sx={{ objectFit: "contain", height:'200px', backgroundColor:'#fff' }}
                        component="img"
                        image={ product.images[0] }
                        alt={ product.title }
                      />
                </CardActionArea>
                
                <CardContent>
                  {/* <Typography variant="h6" component="div" color='info'>
                    ${ product.price } mxn
                  </Typography> */}
                  <Typography gutterBottom color={ "info.main" }>
                    { product.category }
                  </Typography>

                  <Typography color="text.secondary" marginTop={ 2 }>
                    { product.title }
                  </Typography>
                </CardContent>
              </Box>

            <CardActions>
             <Link href={ product.link } target='_blank' width='100%' sx={{ textDecoration:'none' }}>
                <Button size="small" color="info" fullWidth>
                  Comprar
                </Button>
             </Link>
            </CardActions>
          </Card>
    
  </Grid>
  )
}

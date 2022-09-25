import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { SearchBar } from '../components/ui'
import { useProducts } from '../hooks'
import { ProductList } from '../components/products'


const Home: NextPage = () => {

  const { products, isLoading } = useProducts('/products')

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <ShopLayout title={'Ochoagram Basics'} pageDescription={'Porductos recomendados por Ochoagram'}>

      <video autoPlay loop style={{ width: '100%', height: '400px' }} className='mainBanner'
      src='https://res.cloudinary.com/dnxxkvpiz/video/upload/v1646206789/Berkelio/cover_hzf9rb.mp4'>
      </video>

      <SearchBar />


      <Box sx={{ width: '100%' }} marginTop={ 4 } >
        <Tabs 
        indicatorColor="primary"
        value={value} 
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile >

          <Tab label="Hogar" />
          <Tab label="Mascotas" />
          <Tab label="Tecnoligía" />
          <Tab label="libros" />
          <Tab label="Cocina" />
          <Tab label="Estilo de vida" />

        </Tabs>
      </Box>

      <ProductList products={ products } />

    </ShopLayout> 
  )
}

export default Home

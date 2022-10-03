import { useEffect, useState } from 'react';
import {  } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { FullScreenLoading, SearchBar } from '../components/ui'
import TabsComponents from '../components/ui/TabsComponent';
import { dbProducts } from '../database';


const Home: NextPage = () => {

  
  return (
    <ShopLayout title={'The Basics'} pageDescription={'Porductos recomendados por Ochoagram y la comunidad'}
    imageFullUrl={'https://res.cloudinary.com/dnxxkvpiz/image/upload/v1664482050/banner_aj88vf.jpg'}>

      <video autoPlay loop style={{ width: '100%', height: '400px' }} className='mainBanner'
      src='https://res.cloudinary.com/dnxxkvpiz/video/upload/v1646206789/Berkelio/cover_hzf9rb.mp4'>
      </video>

      <SearchBar />
      <TabsComponents query={ 'all' }  />

    </ShopLayout> 
  )
}


export default Home

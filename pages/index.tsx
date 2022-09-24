import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout'
import { SearchBar } from '../components/ui'


const Home: NextPage = () => {

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

      <Grid container spacing={ 2 } marginTop={ 4 }>
        
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 } xl={ 2 }>
          <Card sx={{ maxWidth:'100%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image="https://res.cloudinary.com/dnxxkvpiz/image/upload/v1646082040/Berkelio/cartera_bolso_fddki0.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h6" component="div" color='info'>
                  $399 mxn
                </Typography>
                <Typography gutterBottom color={ "info.main" }>
                  Libros
                </Typography>

                <Typography color="text.secondary" marginTop={ 2 }>
                  Lizards are a widespread group of squamate reptiles.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="info" fullWidth sx={{  }}>
                Comprar
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

    </ShopLayout> 
  )
}

export default Home

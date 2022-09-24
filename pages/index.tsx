import React from 'react'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ShopLayout } from '../components/layouts/ShopLayout'
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const Home: NextPage = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <ShopLayout title={'Ochoagram Basics'} pageDescription={'Porductos recomendados por Ochoagram'}>
      
      <video autoPlay loop style={{ width: '100%', height: '400px' }} className='mainBanner'>
        <source src='https://res.cloudinary.com/dnxxkvpiz/video/upload/v1646206789/Berkelio/cover_hzf9rb.mp4'  />
      </video>


      <Box sx={{ maxWidth:"600px" }} margin='0 auto' paddingTop={ 4 } width={'100%'}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>


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

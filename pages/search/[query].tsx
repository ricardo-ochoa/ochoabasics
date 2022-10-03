import { ClosedCaptionOffOutlined } from "@mui/icons-material";
import { Typography, Box, IconButton } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import { ShopLayout } from "../../components/layouts/ShopLayout";
import { ProductList } from "../../components/products";
import { SearchBar } from "../../components/ui";
import TabsComponents from "../../components/ui/TabsComponent";
import { dbProducts } from "../../database";
import { IProduct } from "../../interfaces";
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from "next/router";


interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}



const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
    
    const { asPath, push } = useRouter();

    const onCancelSearch = () => {
        push(`/`);
    }

  return (
    <ShopLayout title={'The Basics'} pageDescription={'Encuentra las mejores recomendaciones de compra'}>
        <video autoPlay loop style={{ width: '100%', height: '400px' }} className='mainBanner'
        src='https://res.cloudinary.com/dnxxkvpiz/video/upload/v1646206789/Berkelio/cover_hzf9rb.mp4'>
        </video>

        <SearchBar />

        {
            foundProducts 
                ? <Box display='flex'sx={{ flexDirection:{ xs:'column', sm:'column', md:'row'}, alignItems:'center' }}>
                    <Typography variant='h4' sx={{ mb:{ xs: 0 }}} mt={ 4 } >Resultado de:</Typography>
                    <Typography variant='h4' sx={{ ml: 2, mt:{ xs: 0, md: 4 } }}  color="primary" textTransform="capitalize">{ query }
                        <IconButton sx={{ marginTop: 0, marginLeft: 1 }} onClick={ (e) => onCancelSearch()  }>
                            <CancelIcon />
                        </IconButton>
                    </Typography>
                    
                  
                  </Box> 
                : (
                    <>
                        <Box display='flex'sx={{ flexDirection:{ xs:'column', sm:'column', md:'row'}, alignItems:'center'  }}>
                            <Typography variant='h4' sx={{ mb: 1 }} mt={ 2 }>No encontramos:</Typography>
                            <Typography variant='h4' sx={{ ml: 2, mt:{ xs: 0, md: 1 } }}  color="primary" textTransform="capitalize">{ query }
                            
                            <IconButton sx={{ marginTop: 0, marginLeft: 1 }} onClick={ (e) => onCancelSearch()  }>
                                    <CancelIcon />
                            </IconButton>
                            </Typography>
                            
                        </Box>
                        <Typography variant='h6' mt={ 6 }> Te pueden gustar:</Typography>
                    </>
                )
        }
        
        {/* <TabsComponents query={ products } /> */}
        <ProductList products={ products } />
        
    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const { query = '' } = params as { query: string };

    if ( query.length === 0 ) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    // y no hay productos
    let products = await dbProducts.getProductsByTerm( query );
    const foundProducts = products.length > 0;

    // TODO: retornar otros productos
    if ( !foundProducts ) {
        // products = await dbProducts.getAllProducts(); 
        products = await dbProducts.getProductsByTerm('alexa');
    }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}

export default SearchPage
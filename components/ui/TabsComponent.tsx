import React, { useState, FC } from 'react'
import { Box, Tab, Typography, Tabs } from '@mui/material';
import { useProducts } from '../../hooks';
import { ProductList } from '../products';
import { FullScreenLoading } from './FullScreenLoading';
import { IProduct } from '../../interfaces';
import { ChildFriendly } from '@mui/icons-material';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{ children }</Box>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

interface Props {
  query?: IProduct[] | string ;
}
  

const TabsComponents:FC<Props> = ({ query }) => {

    const { products, isLoading } = useProducts(`/products?category=${ query }`)
  
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    
  };

  const categories = products.map( categ => categ.category );
  // const productsData = products.filter( product => product.category ===  );

  const showMascotas = products.filter( product => product.category === "Mascotas" );
  const showLibros = products.filter( product => product.category === "Libros" );
  const showTech = products.filter( product => product.category === "Tecnología" );

  return (
    <>
        <Box sx={{ width: '100%' }} marginTop={ 4 } >
        <Tabs 
        indicatorColor="primary"
        value={value} 
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        >
        <Tab key={ 0 } label={ 'Mascotas' } {...a11yProps( 0 )} />
        <Tab key={ 1 } label={ 'Tecnología' } {...a11yProps( 1 )} />
        <Tab key={ 2 } label={ 'Libros' } {...a11yProps( 2 )} />
        {/*            
        {
            products.map( category =>(
            <Tab key={ category._id } label={ category.category } {...a11yProps( categories.indexOf( category.category  ) )} />
            ) )
        }   */}
        </Tabs>
        </Box>

    {
        isLoading
        ? <FullScreenLoading />
        : 
                <>
                <TabPanel key={ 0 } value={value} index={ 0 }>
                    <ProductList products={ showMascotas } />
                </TabPanel>

                <TabPanel key={ 1 } value={value} index={ 1 }>
                    <ProductList products={ showTech } />
                </TabPanel>

                <TabPanel key={ 2 } value={value} index={ 2 }>
                    <ProductList products={ showLibros } />
                </TabPanel>
                </>
            
    }
   </>
  )
}

export default TabsComponents
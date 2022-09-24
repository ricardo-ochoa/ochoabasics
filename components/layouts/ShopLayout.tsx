import { FC } from "react";
import Head from "next/head"
import { Box, Divider, Typography } from '@mui/material';
import Link from "next/link";
//import { Navbar, SideMenu } from "../ui";


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: any;
    robots?: string;
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl, robots }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content={ pageDescription }></meta>

            <meta name="og:title" content={ title }></meta>
            <meta name="og:description" content={ pageDescription }></meta>
            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl }></meta>
                )
            }

            <meta name="author" content="Ricardo Ochoa"></meta>
            <meta name="copyright" content="Ricardo @ochoagram"></meta>
            <meta name="robots" content={ robots }></meta>



            <meta name="twitter:account_id" content="18ce55hprg3"/>
            <meta property="twitter:domain" content={ title }></meta>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@ochoagram"></meta>
            <meta name="twitter:creator" content="@ochoagram"></meta>
            <meta property="twitter:image:src" content={ imageFullUrl }></meta>
            
        </Head>

        {/* <nav>
            <Navbar />
        </nav>

        <SideMenu /> */}

        <main className='main' style={{
            margin: '0px auto',
            maxWidth: '1920px',
            padding: '0 20px',
        }}>
            { children }
        </main>

        <footer>
            <Box mt={ 8 }>
                <Divider></Divider>
                <Box display={'flex'} alignItems='center' justifyContent={'center'}>
                    <Typography  mt={ 4 } mb={ 4 } sx={{ textAlign:'center' }} mr='0.5rem'> Made with love by </Typography>
                    <Link href="https://www.instagram.com/devochoa/" passHref>
                        <a target="_blank" rel="noopener noreferrer">
                            @Ochoagram
                        </a>
                    </Link>
                </Box>
            </Box>
            
        </footer>
    </>
  )
}

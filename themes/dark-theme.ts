import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#abff00'
    },
    secondary: {
      main: '#1e1e1e'
    },
    info: {
      light: '#E5FFB0',
      main: '#abff00',
      contrastText: '#000',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '5rem',
          fontWeight: 600,
          '@media (max-width:768px)': {
            fontSize: '3.05rem',
          },'@media (max-width:425px)': {
            fontSize: '2.5rem',
          },
          fontFamily: 'Anek Latin',
          
        },
        h2: {
          fontSize: '3.75rem',
          fontWeight: 400,
          '@media (max-width:768px)': {
            fontSize: '2.75rem',
          },'@media (max-width:425px)': {
            fontSize: '2.5rem',
          },
          fontFamily: 'Anek Latin'
        },
        h3: {
          fontSize: '3rem',
          '@media (max-width:600px)': {
            fontSize: '2rem',
          },
          fontFamily: 'Anek Latin'
        },
        h4: {
          fontSize: '2.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.9rem',
          },
          fontFamily: 'Anek Latin'
        },
        h5: {
          fontSize: '2rem',
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
          },
          fontFamily: 'Anek Latin'
        },
        h6: {
          fontSize: '1.5rem',
          '@media (max-width:600px)': {
            fontSize: '1.2rem',
          },
          fontFamily: 'Anek Latin'
        },
        subtitle1: {
          fontSize: '1.125rem',
          fontWeight: 600,
          '@media (max-width:900px)': {
            fontSize: '1rem',
          },
          '@media (max-width:375px)': {
            fontSize: '0.875rem',
          }
          ,
          fontFamily: 'Anek Latin',
          lineHeight: 'normal'
        },
        body1: {
          fontSize: '1rem',
          '@media (max-width:900px)': {
            fontSize: '0.9rem',
          },
          lineHeight: 'normal'
        },
        body2: {
          fontFamily: 'Anek Latin',
          fontSize: '1rem',
          '@media (max-width:900px)': {
            fontSize: '0.9rem',
            fontWeight: 900
          },
          lineHeight: 'normal'
        },
    }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 100,
          backgroundColor: '#E5FFB0',
          color: '#000',
          height:'40px',
          fontWeight: 800,
          ":hover": {
            backgroundColor: '#abff00',
            transition: 'all 0.3s ease-in-out',
            color: '#000'
          }
        }
      }
    },
    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 20px rgba(0,0,0,0.05)',
          borderRadius: '25px',
        }
      }
    },
    MuiTab:{
      styleOverrides: {
        root: {
          color:'abff00',
        }
      }
    }
  }
});
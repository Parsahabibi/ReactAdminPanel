import {createTheme} from "@mui/material/styles";
import '../index.css'

const Theme = createTheme({
    direction: "rtl",
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontFamily: 'YekanBakh',
                    fontSize: "62.5%",
                    padding: 0,
                    margin: 0,
                    boxSizing: "border-box",
                },
                body: {
                    backgroundColor: "rgb(250,250,250)",
                    a: {
                        textDecoration: "none",
                        fontSize: "1.3rem",
                    },
                    label: {
                        fontSize: "1.6rem",
                        fontWeight: 500,
                    },
                    stronge: {
                        fontSize: "2.2rem",
                    },
                },
            },
        },
    },
    palette: {
            main: '#4318FF',
            dark: '#2B3674',
            light: '#A3AED0',
            one: '#F4F7FE',
            two: '#B0BBD5',
            three: '#6D7175',
            four: '#775FFC',
            five: '#6AD2FF',
            six: '#EFF4FB',
            seven: '#FAFCFE',
            eight: '#707EAE'
        // primary: {
        // main: '#08A6A6',
        // primary : '#036666',
        // secondary : '#8E9D9D',
        // one: '#F9FAFA',
        // two:'#B2BEBE',
        // three: '#7A7A7A',
        // four: '#2D96B7' ,
        // five:'#22C1C1',
        // six:'#DDF5EE' ,
        // seven:'#F9FFFF' ,
        // eight:'#92A9A9'
        // },


        // primary: {
        // main:'#FD6A00',
        // primary : '#6B472B',
        // secondary : '#B2ADA8',
        // one: '#FFFAF4',
        // two:'#B4A89C',
        // three: '#726A64',
        // four:'#EC6A6A' ,
        // five:'#FFA462',
        // six:'#FFE4CA' ,
        // seven:'#FFF5EA' ,
        // eight:'#948D87'
        // },


        // primary: {
        // main: '#8F1010',
        // primary: '#591B1B',
        // secondary: '#DAB1B1',
        // one: '#FFF4F4',
        // two: '#EED1D1',
        // three: '#5B4848',
        // four: '#FF6060',
        // five: '#FFA1A1',
        // six: '#FFDDDD',
        // seven: '#FFEBEB',
        // eight: '#B79191'
        // },
    },


    breakpoints: {
        values: {
            xs: 0,
            xxs: 400,
            sm: 700,
            md: 900,
            lg: 1200,
            g: 1536,
            xl: 1920,
        },
    },
    typography: {
        fontFamily: 'YekanBakh',
        h1: {
            fontSize: "34px",
            fontWeight: 900,
        },
        h2: {
            fontSize: "24px",
        },
        h3: {
            fontSize: "20px",
        },
        h4: {
            fontSize: '18px'
        },
        h5: {
            fontSize: "16px",
        },
        h6: {
            fontSize: "14px",
        },
        subtitle1: {
            fontSize: "12px"
        },
        subtitle2: {
            fontSize: '10px'
        },

    },
});

export default Theme;
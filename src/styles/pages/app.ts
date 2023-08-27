import { styled } from "..";

export const Container = styled('div', {
  // flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    alignItems: 'center',  
  }
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // width: '100%',
  maxWidth: 1250,
  margin:'1rem auto',
  
  a: {
    textDecoration: 'none',
    color: '$corFonte',

    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    
    '&:hover':{
      color: '$corSecundaria',
    },
  },

  '@media screen and (max-width: 768px)': {
    justifyContent: 'center', // Centralizando os elementos horizontalmente
    margin: 0,

    
    a: {
      display: 'none',
      fontSize: '0.5rem'
    }
  }
 })

export const LogoContainer = styled('div', {
  marginRight: 'auto',
  a: {
    display:'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover':{
      color: 'white',
    },
    
  },
  '@media screen and (max-width: 768px)': {
    alignItems: 'center', // Centralizando os elementos verticalmente
    marginRight: 0, 
    
  }

})
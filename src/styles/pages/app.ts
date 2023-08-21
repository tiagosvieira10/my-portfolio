import { styled } from "..";

export const Container = styled('div', {
  // flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '100%',
  maxWidth: 1300,
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
  }

})
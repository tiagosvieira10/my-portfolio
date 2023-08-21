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
  maxWidth: 1240,
  margin:'0 auto',
  
  a: {
    textDecoration: 'none',
    color: '$corFonte',

    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bolder',
    
    '&:hover':{
      color: 'rgba(255, 255, 255, 1)',
    },
  },
 })

export const LogoContainer = styled('div', {
  marginRight: 'auto'
})
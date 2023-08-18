import { styled } from "..";

export const Container = styled('div', {
  display: 'flex'
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  
  width: '100%',
  maxWidth: 1180,
  margin:'0 auto',


  a: {
    textDecoration: 'none',
    color: '$corFonte',

    padding: '1rem',
    fontWeight: 'lighter',
    fontSize: 'small',
    
    '&:hover':{
      color: 'rgba(255, 255, 255, 1)',
    },
  },
})

export const LogoContainer = styled('div', {
  marginRight: 'auto'
})
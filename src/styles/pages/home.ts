
import { styled } from "..";

export const HomeContainer = styled('div', {
  maxWidth: 1300,
  margin: '10rem auto',

  div: {
    width: '10rem',
    borderTop: '0.6rem solid $corSecundaria',
  },
  
  h1: {
    color: 'white',
    fontSize: '5rem',
    paddingTop: '4rem',
    paddingBottom: '1rem',
  },

  span: {
    fontSize: '1.4rem',
    color: '$corFonte',
  }

})

export const Sidebar = styled('footer', {
  display: 'flex',
  margin: '11rem auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  justifyItems: 'center'
})

export const ItemSidebar = styled('footer', {
  display: 'block',
  maxWidth: '20rem',
  alignItems: 'center',
  borderRight: '0.2rem solid $grey',
  paddingRight: '6rem',

  span: {
    color: 'white',
    fontWeight: 'bold'
  },
  
  p: {
    paddingTop: '0.8rem',
    paddingBottom: '0.8rem',

    color: '$corFonte',
  },

  a:{
    display: 'flex',
    alignItems: 'center',

    gap: '0.5rem',
    paddingBottom: '1rem',

    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem',

    borderBottom: '0.1rem solid $corFonte',
    maxWidth: 'fit-content'
  },
  'a:hover':{
    transform: 'translate(4px, 0px) skew(-20deg, 0deg)',
    transition: '0.3s'
  }
})
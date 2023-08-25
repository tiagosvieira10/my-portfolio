
import { styled } from "..";

export const HomeContainer = styled('div', {
  maxWidth: 1250,
  margin: '10rem auto',

  div: {
    width: '10rem',
    borderTop: '0.6rem solid $corSecundaria',
  },
  
  h1: {
    color: 'white',
    fontSize: '6rem',
    paddingTop: '4rem',
    paddingBottom: '1rem',
  },

  span: {
    fontSize: '1.4rem',
    color: '$corFonte',
  },

  // '@media screen and (max-width: 768px)': {
  //   maxWidth: '95%',
  //   margin: '5rem auto',

  //   h1: {
  //     fontSize: '2.3rem',
  //     paddingTop: '2rem',
  //     paddingBottom: '0.5rem',
  //   },

  //   span: {
  //     fontSize: '1rem',
  //   },

    // ... other styles ...
  // }
})

export const Sidebar = styled('footer', {
  display: 'flex',
  margin: '8rem auto',
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

export const IconsContainer = styled('main',{
  display: 'flex',
  justifyContent: 'flex-end',
  textDecoration: 'none',
  
  gap: '1rem',

})


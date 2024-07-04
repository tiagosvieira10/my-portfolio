
import { styled } from "..";

export const HomeContainer = styled('div', {
  maxWidth: 1250,
  margin: '3rem auto',

  'div.barraSuperior': {
    width: '10rem',
    borderTop: '0.6rem solid $corSecundaria',
  },
  
  h1: {
    color: 'white',
    strong: {
      background: 'linear-gradient(to right, white, #008BA4)',
      backgroundClip: 'text',
      color: 'transparent',
    },
    fontSize: '6rem',
    paddingTop: '4rem',
    paddingBottom: '1rem',
  },

  span: {
    fontSize: '1.4rem',
    color: '$corFonte',
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '2rem auto',

    h1: {
      fontSize: '2.3rem',
      paddingTop: '2rem',
      paddingBottom: '0.5rem',
    },

    'div.barraSuperior': {
      width: '8rem',
      borderTop: '0.4rem solid $corSecundaria',
    },

    span: {
      fontSize: '1rem',
    },
  }
})

export const Sidebar = styled('footer', {
  display: 'flex',
  margin: '3rem auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  justifyItems: 'center',

  '@media screen and (max-width: 768px)': {

    flexDirection: 'column',
    gap: '1.5rem',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: '1rem auto',

    h1: {
      fontSize: '2.3rem',
      paddingTop: '2rem',
      paddingBottom: '0.5rem',
    },

    span: {
      fontSize: '1rem',
    },
  }
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
  },

  '@media screen and (max-width: 768px)': {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',

  
    gap: '1rem',
    borderRight:'none',
  }
})

export const IconsContainer = styled('main',{
  display: 'flex',
  justifyContent: 'flex-end',
  textDecoration: 'none',
  
  gap: '1rem',

  '@media screen and (max-width: 768px)': {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',

    marginTop:'2rem',  

    gap: '1rem'
  }
})


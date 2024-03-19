import { styled } from "..";

export const ContatosContainer = styled('main',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1300,
  margin: '5rem auto',
  
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    color: 'white',
    fontSize: '3rem',
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '2rem auto',
  }
})
export const CardContato = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  
  gap: '1.5rem',
  margin: '7rem 0 5rem',

  p: {
    color: '$corFonte',
    fontSize: '1.5rem',

    span: {
      color: '$corSecundaria'
    }
  },

  '@media screen and (max-width: 768px)': {
    marginTop: '2rem',
  }
})

export const Contato = styled('section',{
  display: 'flex',
  flexDirection: 'column',

  height: '8rem',
  width: '25rem',
  borderRadius: '28px',

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#2d343f',

  color: 'white',

  gap: '1.7rem',

  h2: { 
    margin: '0.9rem auto'
  },

  a: {
    textDecoration: 'none',
    color: 'white',
  },

  button: {
    background: 'rgba(0, 139, 164, 0.5)',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',

    border: 'none',
  
    width: '25rem',

    height: '50%',
    borderRadius: '28px',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '$corSecundaria',
      fontSize: '1.1rem',
    },
    transition: '0.5s',
  },

  '@media screen and (max-width: 768px)': {
    height: '6rem',
    width: '19rem',

    button: {
      fontSize: '1rem',
      width: '19rem',

      marginTop: '-2rem'
    },

    h2: {
      fontSize: '1.2rem'
    },

    '&:hover': {
      fonfontSize: '1.2rem',
      backgroundColor: 'none',
    },
  }
})
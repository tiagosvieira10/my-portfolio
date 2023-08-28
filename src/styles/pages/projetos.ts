import { styled } from "..";

export const ProjetosContainer = styled('main',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1250,
  margin: '3rem auto',
  

  p: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    position: 'absolute'
  },

  span: {
    color: '$corSecundaria'
  },

  '@media screen and (max-width: 768px)': {
    padding: '1.3rem',
    margin: '2rem auto',
  }
})

export const CardProjetos = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  marginBottom: '2rem',
})

export const Projeto = styled('section',{
  
  margin: '5rem auto',
  borderBottom: '1px solid $corSecundaria',
  paddingBottom: '1.5rem',

  justifyContent: 'center',
  alignItems: 'center',

  width: '70%',
  lineHeight: '2rem',

  h2: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',

    marginBottom: '1rem'
  },

  h4: {
    fontSize: '1.2rem',
    color: '$corFonte',
  },

  img:{
    '&:hover': {
      transition: 'transform 0.3s',
      transform: 'scale(1.07)'
    }
  },

  '@media screen and (max-width: 768px)': {
    borderBottom: 'none',
    
    h2: {
      width: '100vh'
    },

    h4: {
      width: '90vh',
      paddingBottom: '2rem',
      borderBottom: '1px solid $corSecundaria',
    },

    img:{ 
      marginBottom: '2rem'
    }

  }
})

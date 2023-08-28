import { styled } from "..";

export const ProjetosContainer = styled('main',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1250,
  margin: '1rem auto',
  

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

    p: {
      position: 'absolute',
      fontSize: '2rem'
    }
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

  h1: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',

    marginBottom: '1rem'
  },

  h3: {
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
    marginTop: '-1rem',
    
    h1: {
      fontSize: '2rem'
    },

    h3: {
      fontSize: '0.7rem',
      paddingBottom: '2rem',
      borderBottom: '1px solid $corSecundaria',
    },

    img:{
      width: 270,
      height: 310,
      marginBottom: '-1rem',
    },

    a: {
      img:{
        width: 40,
        height: 40,

        marginBottom: '1rem'
      }
    }

  }
})

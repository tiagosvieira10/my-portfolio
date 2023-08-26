import { styled } from "..";

export const ProjetosContainer = styled('main',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1250,
  margin: '3rem auto 0',
  
  // alignItems: 'center',
  // justifyContent: 'flex',

  p: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
  },

  span: {
    color: '$corSecundaria'
  }
})

export const CardProjetos = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  // gap: '1rem',

  marginBottom: '2rem'
})

export const Projeto = styled('section',{
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
  }
})

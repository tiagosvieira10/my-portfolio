import { styled } from "..";

export const ProjetosContainer = styled('main',{
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1300,
  margin: '5rem auto',
  
  alignItems: 'center',
  justifyContent: 'center',

  p: {
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold'
  },

  span: {
    color: '$corSecundaria'
  }
})

export const CardProjetos = styled('section',{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  
  gap: '1rem',
})

export const Projeto = styled('section',{
  borderBottom: '1px solid $corSecundaria'
})
